import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './components/HomeModule'

const Index = () => {
  return <Provider store={store}>
    <Home/>
  </Provider>;
};

ReactDOM.render(<Index />, document.getElementById("index"));