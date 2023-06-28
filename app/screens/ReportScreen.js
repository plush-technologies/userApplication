import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState } from 'react';
import { NavigationContainerm, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from "./ReportScreen"

// Will call the id in the data base and display it in the report screen


function handleChangeText(inputText) {
    console.log(inputText);
}


function ReportScanner({type, data}) {
    
    console.log(data);
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={handleChangeText}
                
                placeholder="Enter text here"
            />

            <Button title={String(data)} />
        </View>
    );
}

function App() {
    const route = useRoute();
    const {type, data} = route.params;
    const [text, setText] = useState("");
    return(ReportScanner({type, data}));
}

export default App;