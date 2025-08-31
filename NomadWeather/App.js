import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraTest from './components/CameraTest';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text
        style={{
          ...styles.text,
        }}
      >
        Hello
      </Text>
      <StatusBar style="light" />
      <VibrationTest /> */}
      <CameraTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});
