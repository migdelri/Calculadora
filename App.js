import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from "./NavigationStack";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>React Navigation Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <NavigationStack />

    </NavigationContainer>
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
