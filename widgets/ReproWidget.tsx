import { Button, Text, Toggle, VStack } from '@expo/ui/swift-ui';
import { containerBackground } from '@expo/ui/swift-ui/modifiers';
import { createWidget, type WidgetEnvironment } from 'expo-widgets';
import { PlatformColor } from 'react-native';

type ReproProps = {
  enabled?: boolean;
  count?: number;
};

type ReproConfiguration = {
  theme: string;
  desk: string;
  showDate: boolean;
  label: string;
  count: number;
};

const ReproWidget = (props: ReproProps, environment: WidgetEnvironment<ReproConfiguration>) => {
  'widget';
  const enabled = props.enabled ?? false;
  const count = props.count ?? 0;
  return (
    <VStack modifiers={[containerBackground(PlatformColor('systemBackground'), 'widget')]}>
      <Text>enabled: {String(enabled)}</Text>
      <Toggle label="Enabled" isOn={enabled} onIsOnChange={(isOn) => ({ enabled: isOn })} />
      <Text>count: {String(count)}</Text>
      <Button label="Count" onPress={() => ({ count: count + 1 })} />
    </VStack>
  );
};

export default createWidget<ReproProps, ReproConfiguration>('ReproWidget', ReproWidget, {});
