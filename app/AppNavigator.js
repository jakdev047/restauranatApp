import React from 'react';

// navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


// pages
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import Icon from './components/Icon';
import FavouriteScreens from './screens/FavouriteScreens';
import GeoLocationScreen from './screens/GeoLocationScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Icon
                        name="ios-menu"
                        size={24}
                        color='#fff'
                        iconStyle={{ paddingRight: 15 }}
                        action={() => navigation.toggleDrawer()}
                    />),
                headerStyle: {
                    backgroundColor: '#f53b50'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }

            }}
        >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen
                name="Dish Detail"
                component={DishDetailScreen}
                options={({ route }) => ({ title: route.params.dish.name })}
            />
        </Stack.Navigator>
    )
}

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Icon
                        name="ios-menu"
                        size={24}
                        color='#fff'
                        iconStyle={{ paddingRight: 15 }}
                        action={() => navigation.toggleDrawer()}
                    />),
                headerStyle: {
                    backgroundColor: '#f53b50'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }

            }}
        >
            <Stack.Screen name="Favourites" component={FavouriteScreens} />
        </Stack.Navigator>
    )
}

const GeoStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Icon
                        name="ios-menu"
                        size={24}
                        color='#fff'
                        iconStyle={{ paddingRight: 15 }}
                        action={() => navigation.toggleDrawer()}
                    />),
                headerStyle: {
                    backgroundColor: '#eb1'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }

            }}
        >
            <Stack.Screen name="Geo Location" component={GeoLocationScreen} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Favourites" component={FavStack} />
            <Drawer.Screen name="Geo Location" component={GeoStack} />
        </Drawer.Navigator>
    )
};

export default AppNavigator;
