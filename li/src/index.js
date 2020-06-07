import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import finalReducer from './reducer'
import AsyncComponent from './component/index.js'
/**
 *异步闲暇时加载
 * **/
const App = AsyncComponent(() => import(/* webpackChunkName: "App",webpackPrefetch: true*/ './App/index.js'));
const Home = AsyncComponent(() => import(/* webpackChunkName: "Home",webpackPrefetch: true */ './Home/index.js'));
const store = createStore(finalReducer, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store = {store}>
      <BrowserRouter>
         <Route path='/' exact={true} component = {App}/>
         <Route path='/home'  component = {Home}/>
      </BrowserRouter>
   </Provider>,
    document.getElementById('root')
 )