# expo-widgets dynamic enum repro

Expo SDK 58, `expo-widgets` 58.0.29 with no patches.

One widget, `ReproWidget`, with five configuration parameters: a static enum (`theme`), a dynamic enum (`desk`), a boolean, a string, and a number. The widget shows each configuration value as text.

`App.tsx` calls `ReproWidget.setConfigurationParameterEnum('desk', ...)` on launch with three named options. The fallback option in `app.json` has a different name (`Automatic (app.json)`) so the source of a name is visible.

## Steps

1. `npm install`
2. Set `ios.bundleIdentifier` and `ios.appleTeamId` in `app.json`.
3. `npx expo run:ios --device --configuration Release`
4. Open the app once.
5. Add the Repro Widget to the Home Screen.
6. Long-press the widget and tap **Edit Widget**.

Expected: the Desk row shows the default option's name, `Automatic (from app)`.

Actual: before a pick, the Desk row shows `auto`, the default option's raw value. The Theme row (a static enum) shows `Light theme`. The Desk list shows the three names. After you pick `Work desk`, the row shows `Work desk`. Only the default value is affected.
