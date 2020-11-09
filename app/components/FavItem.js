import React from 'react';
import { Image, Text, View, StyleSheet, Pressable, Alert } from 'react-native';
import { connect } from 'react-redux';
import { removeFavourites } from '../redux/actions/dishes';

const FavItem = ({ item,removeFavourites }) => {
    const removeFav = () => {
        Alert.alert(
            'Delete Favourite?',
            'Are your sure you wish to delete the favourite dish' + item.name + '?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelled'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => removeFavourites(item) }
            ],
            { cancelable: false }
        )
    }
    return (
        <Pressable onLongPress={() => removeFav()}>
            <View style={styles.container}>
                {
                    item.image && <Image source={{ uri: item.image }} style={styles.image} />
                }
                <View style={styles.details}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        </Pressable>
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
});

const mapDispatchToProps = dispatch => {
    return {
        removeFavourites: dish => dispatch(removeFavourites(dish))
    }
}

export default connect(null, mapDispatchToProps)(FavItem);
