import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { NavigationContainerm, useRoute } from '@react-navigation/native';

const MapScreen = () => {
    const route = useRoute();
    const {longitude, latitude} = route.params;
    console.log(latitude, longitude, " in maps");
    const origin = { latitude: latitude, longitude: longitude }; // Origin coordinates
    console.log(origin);
    //const destination = { latitude: 37.78825, longitude: -122.4324 }; // Destination coordinates
    // const waypoints = [
    //   { latitude: 37.78905, longitude: -122.4319 }, // Waypoint 1 coordinates
    //   { latitude: 37.7895, longitude: -122.4331 }, // Waypoint 2 coordinates
    //   { latitude: 37.7899, longitude: -122.4342 }, // Waypoint 3 coordinates+-
    // ];
    return (
        <View style={{ flex: 1 }}>
            <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
                <Marker coordinate={origin} title="Origin" />
            </MapView>
        </View>
    );
    /*
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={origin} title="Origin" />
          <Marker coordinate={destination} title="Destination" />
          {waypoints.map((waypoint, index) => (
            <Marker key={index} coordinate={waypoint} title={`Waypoint ${index + 1}`} />
          ))}
          <MapViewDirections
            origin={origin}
            destination={destination}
            waypoints={waypoints}
            apikey="AIzaSyDBXiy2vPFU13UP00FipfVd5oBsynJzLqw"
            strokeWidth={3}
            strokeColor="blue"
          />
        </MapView>
      </View>
    );*/
  };

export default MapScreen;