import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
//состояние
import {store} from "./store";



ReactDOM.render(
   // обворачиваем в провайдер для доступа к состоянию во всём приложении
   <Provider store={store}>
       <App />
   </Provider>,
    document.getElementById('root')
);