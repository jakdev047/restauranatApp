import React from 'react';
import {  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const Icon = props => {
    return (
         <TouchableOpacity style={{paddingRight: 15}}>
            <Ionicons name="ios-menu" size={24} color='black' />
         </TouchableOpacity>
    )
};

export default Icon;
