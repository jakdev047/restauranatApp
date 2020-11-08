import React from 'react';
import { Image, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const MenuItem = ({item,selectedDishes}) => {
    return (
        <TouchableHighlight onPress={selectedDishes}>
            <View style={styles.container}>
                {
                    item.image && <Image source={{uri: item.image}} style={styles.image} />
                }
                <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    name: {
        fontWeight: '500'
    },
    description:{
        color: '#6e6969'
    }
})

export default MenuItem;
