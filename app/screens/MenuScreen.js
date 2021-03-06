import React,{useEffect} from 'react';
import { SafeAreaView, View,StyleSheet, Platform, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actions/dishes';
import MenuItem from '../components/MenuItem';

const MenuScreen = props => {

    useEffect(() => {
        props.getDishes();
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.view}>
                <FlatList
                    data={props.dishes}
                    renderItem={
                        ({item})=> (<MenuItem item={item} selectedDishes={()=> props.navigation.navigate('Dish Detail',{dish:item})} />)
                    }
                    keyExtractor={item=>item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
    }
});

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: ()=> dispatch(getDishes())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MenuScreen);
