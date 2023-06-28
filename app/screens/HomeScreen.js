import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScannerScreen from './ScannerScreen';
import MapScreen from './MapScreen';
import SearchScreen from './SearchScreen';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to ScannerScreen"
          onPress={() => navigation.navigate('Scanner')}
        />
        <Button
          title="Go to SearchScreen"
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    );
};


  
function App() {
return (
    <View style={StyleSheet.absoluteFill} >
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Scanner" component={ScannerScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
);
}
  
  export default App;
