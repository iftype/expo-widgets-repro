# expo-widgets Toggle repro (`toggle-fixed` branch)

Expo SDK 58, `expo-widgets` 58.0.29 and `@expo/ui` 58.0.29 with the fix applied by patch-package.

The widget in `widgets/ReproWidget.tsx` shows `enabled: <value>`, an `Enabled` `Toggle` from `@expo/ui/swift-ui`, `count: <value>`, and a `Count` `Button`.

## Steps

1. `npm install`
2. Set `ios.bundleIdentifier` and `ios.appleTeamId` in `app.json`.
3. `npx expo run:ios --device --configuration Release`
4. Open the app once.
5. Add the Repro Widget to the Home Screen.

Expected: the widget shows the `Enabled` toggle. A tap toggles it, and the widget shows `enabled: true`.

Actual: the toggle is not rendered. The widget shows `enabled: false`, then `count: 0` and the `Count` button. The `Count` button works.

This is the `toggle-fixed` branch. It applies the fix to `expo-widgets` and `@expo/ui` with patch-package (`patches/`). With it, the toggle shows and a tap toggles it.

---

The rest of this file is the dynamic enum repro on the `main` branch.

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
