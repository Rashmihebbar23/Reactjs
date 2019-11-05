import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import Reduce from './Redux/Reduce';
import {Provider}  from'react-redux';
import {createStore, applyMiddleware} from  'redux';
import Reduxapp from './Redux/Reduxapp';
import thunk from 'redux-thunk';





axios.defaults.baseURL='https://jsonplaceholder.typicode.com';


axios.defaults.headers['Authorization']= 'bearer acess token';

axios.interceptors.request.use((req)=>{
    console.log("axios request",req);
    return req;
})
axios.interceptors.response.use((res)=>{
    console.log("axios response",res);
    return res;
})

    


let middleware = (store) =>next => action=>
{
console.log('action...',action);
let result=next(action);
console.log('state.....',store.getState());
return result;
}

let Store = createStore(Reduce,applyMiddleware(middleware,thunk));

ReactDOM.render(<Provider store={Store}><Reduxapp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
