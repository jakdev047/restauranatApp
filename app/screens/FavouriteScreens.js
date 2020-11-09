import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

const FavouriteScreens = props => {
    return (
        <View>
            <FlatList
                data={props.favourites}
                renderItem={
                    ({ item }) => (<Text>{item.name}</Text>)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
};

const mapStateToProps = state => {
    return {
        favourites: state.dishes.favourites,
    }
}

export default connect(mapStateToProps)(FavouriteScreens);
