import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from "./ReportScreen"

const Stack = createStackNavigator();


function ScannerScreen({ navigation }) {
    const handleBarcodeScanned = ({type, data}) => {
        console.log(data);
        navigation.navigate("Report", {type, data});
    }
    return (
        <View style={StyleSheet.absoluteFill}>
            <BarCodeScanner 
                onBarCodeScanned={handleBarcodeScanned}
                style={StyleSheet.absoluteFill}
            />
        </View>
    );
}



function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Scanner" component={ScannerScreen} />
            <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
    )
}


export default App;
