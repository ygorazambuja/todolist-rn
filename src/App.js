import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

import Home from './pages/Home';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NewTodo" component={NewTodo} />
                <Stack.Screen name="TodoDetails" component={TodoDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
