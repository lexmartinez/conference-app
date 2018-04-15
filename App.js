import React, { Component } from 'react';
import Navigator from './src/config/navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/reducers/index';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default class App extends Component {
  render() {
    console.log('here!!',this.props)
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}