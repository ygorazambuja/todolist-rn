/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/store';

const Store = configureStore();

const ReduxProvider = () => (
    <Provider store={Store}>
        <App></App>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxProvider);
