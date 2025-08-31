import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraTest from './components/CameraTest';

export default function App() {
  return (
    // By default react view is already a flex container,
    // default direction is column
    // 비율로만 정할 수 있음. 디바이스 사이즈에 따라 다르게 보일 수 있으므로 보통 width, height보다는 flex 사용
    // 부모에도 flex: 1을 주는게 중요함. 부모를 지우면 자식이 뭐의 5배인지 모르니까 아무것도 보이지 않는다.
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'tomato' }}></View>
      <View style={{ flex: 5, backgroundColor: 'teal' }}></View>
      <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
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
