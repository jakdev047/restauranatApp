import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const DishDetailScreen = props => {
    const dish = props.route.params.dish;
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    name: {
        fontSize: 20,
        fontWeight: '500'
    },
    description: {
        color: '#6e6969'
    }
})

export default DishDetailScreen;
