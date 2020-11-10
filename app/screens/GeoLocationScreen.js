import React, { useState ,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import Geolocation from '@react-native-community/geolocation';

const GeoLocationScreen = () => {
    const [locationInfo, setLocationInfo] = useState('...');
    // function requestForPermission() {
    //     request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
    //         if(result == RESULTS.GRANTED) {
    //             receiveForPermission();
    //         }
    //     });
    // };
    // function receiveForPermission (){
    //     Geolocation.getCurrentPosition(info => setLocationInfo(JSON.stringify(info)));
    // }
    // useEffect(() => {
    //     requestForPermission();
    // }, [])
    return (
        <View>
            <Text style={styles.name}> {locationInfo} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: '500'
    },
})

export default GeoLocationScreen;
