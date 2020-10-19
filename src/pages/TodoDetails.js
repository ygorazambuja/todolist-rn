import React from 'react';
import {View, Text} from 'react-native';

export default function TodoDetails({route: {params}}) {
    const todo = {...params.todo};
    return (
        <View>
            <Text>{todo.title}</Text>
        </View>
    );
}
