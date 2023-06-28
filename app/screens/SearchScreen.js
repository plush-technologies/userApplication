import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from "./MapScreen"
import * as Location from 'expo-location'

const Stack = createStackNavigator();

function SearchScreen( { navigation } ) {
    const [currentText, setText] = useState("");
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const handleChangeText = (inputText) => {
        setText(inputText);
    };
    const handleSubmit = () => {
        //perform the db request here to get the relevant information back
        //Should return a array/list geolocations for the top 3 facilities and data about them
        navigation.navigate("Map", {latitude, longitude});
    };

    const GPSLocation = () => {
        useEffect(() => {
            const requestLocation = async () => {
                try {
                    const {status} = await Location.requestForegroundPermissionsAsync();
                    if (status === 'granted') {
                        const location = await Location.getCurrentPositionAsync({});
                        const {latitude, longitude} = location.coords;
                        setLatitude(latitude);
                        setLongitude(longitude);
                    } else {
                        console.log("permission denied");
                    }
                } catch (error) {
                    console.log("Error requesting location permission", error);
                }
            }
            requestLocation();
        }, []);
    };
    GPSLocation();
    console.log("latitude: ", latitude, " longitude: ", longitude);
    return (
        <View style={StyleSheet.absoluteFill} >
            <Text>Enter your search query here</Text>
            <Text>longitude: {longitude} latitude: {latitude}</Text>
            <TextInput
                onChangeText={handleChangeText}
                value={currentText}
                placeholder='Enter more information about the error here'
            />
            <Button title="Search" onPress={handleSubmit} />
        </View>
    );
}

function App() {
    return (
        <View style={StyleSheet.absoluteFill}>
            <Stack.Navigator>
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
            </Stack.Navigator>
        </View>
    );
}

export default App;