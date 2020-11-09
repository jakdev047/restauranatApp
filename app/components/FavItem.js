import React from 'react';
import { Image, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const FavItem = ({item,selectedDishes}) => {
    return (
        <TouchableHighlight onPress={selectedDishes}>
            <View style={styles.container}>
                {
                    item.image && <Image source={{uri: item.image}} style={styles.image} />
                }
                <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 15,
        elevation: 3,
        borderRadius: 5
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 250
    },
    name: {
        fontWeight: '500',
        fontSize: 30
        
    },
})

export default FavItem;
