import React, { Component } from 'react';
import Navigator from './src/config/navigation';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/reducers/index';
import config from "./src/config";
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={config.BAR_STYLE}/>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}