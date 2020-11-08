import React from 'react';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const MenuItem = ({item}) => {
    return (
        <TouchableHighlight>
            <View>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

export default MenuItem;
