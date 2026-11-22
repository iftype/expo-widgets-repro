import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReproWidget from './widgets/ReproWidget';

const DESK_OPTIONS = [
  { name: 'Automatic (from app)', value: 'auto' },
  { name: 'Work desk', value: 'work' },
  { name: 'Home desk', value: 'home' },
];

export default function App() {
  useEffect(() => {
    ReproWidget.setConfigurationParameterEnum('desk', DESK_OPTIONS);
    ReproWidget.updateSnapshot({});
  }, []);

  return (
    <View style={styles.container}>
      <Text>Desk options sent to the widget:</Text>
      {DESK_OPTIONS.map((option) => (
        <Text key={option.value}>
          {option.value}: {option.name}
        </Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});
