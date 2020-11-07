import React from 'react';
import { SafeAreaView, Text, View,StyleSheet, Platform, Button } from 'react-native';
import Constants from 'expo-constants';

const MenuScreen = props => {
    console.log(props)
    return (
        <SafeAreaView>
            <View style={styles.view}>
                <Text>Menu Screen</Text>
                <Button 
                    title= 'Dish Detail'
                    onPress={()=>props.navigation.navigate('Dish Detail')}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
    }
})

export default MenuScreen;
