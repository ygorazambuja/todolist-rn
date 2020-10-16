import React from 'react';
import {Text, View} from 'react-native';
import Store from './store';
import {Provider} from 'react-redux';

export default function App() {
    return (
        <Provider store={Store}>
            <View>
                <Text>Oi</Text>
            </View>
        </Provider>
    );
}
