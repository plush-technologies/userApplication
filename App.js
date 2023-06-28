import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import ScannerScreen from './app/screens/ScannerScreen';
import MapScreen from './app/screens/MapScreen';

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <HomeScreen />
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