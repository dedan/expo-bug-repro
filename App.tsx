import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* @ts-ignore: Line is supposed to trigger an error */}
      <Button title="Trigger sync error" onPress={() => asdf.syncErrorTest} />
      <Button
        title="Trigger async error"
        onPress={async () =>
          // @ts-ignore: Line is supposed to trigger an error
          asdf.ayncErrorTest
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
