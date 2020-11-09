import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { addToFavourites } from '../redux/actions/dishes';
import Icon from '../components/Icon';

const DishDetailScreen = props => {
    // data recive by navigation
    const dish = props.route.params.dish;

    // favourite item check
    const isFavourite = props.favourites.some(item=> item.id === dish.id);

    // create favourite list
    const makeFavourite = dish => {
        if (isFavourite) {
            alert('Already added to favourities')
        }
        else {
            props.addToFavourites(dish);
        }
        
    }

    let iconName = 'ios-heart-empty';
    if (isFavourite) {
        iconName = 'ios-heart';
    }

    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View>
                <Icon 
                    name={iconName}
                    size={40}
                    color='#f53b50'
                    iconStyle={{ paddingRight: 10 }}
                    action={() => makeFavourite(dish)}
                />
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
});

const mapStateToProps = state => {
    return {
        favourites: state.dishes.favourites,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavourites: dish => dispatch(addToFavourites(dish))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DishDetailScreen);
