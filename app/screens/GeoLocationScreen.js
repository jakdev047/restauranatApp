import React from 'react'
import { View,StyleSheet, Text } from 'react-native';

const GeoLocationScreen = () => {
    return (
        <View>
            <Text style={styles.name}> Geo Location </Text>
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
