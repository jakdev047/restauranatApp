import React from 'react';
import {  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const Icon = ({name,size,color,iconStyle,action}) => {
    return (
         <TouchableOpacity style={{...iconStyle}}>
            <Ionicons name={name} size={size} color={color} onPress={action} />
         </TouchableOpacity>
    )
};

export default Icon;
