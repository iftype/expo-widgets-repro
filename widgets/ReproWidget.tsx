import { Text, VStack } from '@expo/ui/swift-ui';
import { containerBackground } from '@expo/ui/swift-ui/modifiers';
import { createWidget, type WidgetEnvironment } from 'expo-widgets';
import { PlatformColor } from 'react-native';

type ReproConfiguration = {
  theme: string;
  desk: string;
  showDate: boolean;
  label: string;
  count: number;
};

const ReproWidget = (props: object, environment: WidgetEnvironment<ReproConfiguration>) => {
  'widget';
  const c = environment.configuration;
  return (
    <VStack modifiers={[containerBackground(PlatformColor('systemBackground'), 'widget')]}>
      <Text>theme: {String(c.theme)}</Text>
      <Text>desk: {String(c.desk)}</Text>
      <Text>showDate: {String(c.showDate)}</Text>
      <Text>label: {String(c.label)}</Text>
      <Text>count: {String(c.count)}</Text>
    </VStack>
  );
};

export default createWidget<object, ReproConfiguration>('ReproWidget', ReproWidget, {});
