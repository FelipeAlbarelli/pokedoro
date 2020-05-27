import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css'
import {Provider} from 'react-redux';
import { loadExpenses} from './actions/expenses';

const store = configureStore();

// !!!!!!!!!!!!!1 

store.dispatch(loadExpenses(JSON.parse(localStorage.expenses ? localStorage.expenses : '[]')));

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

store.subscribe( () => {
    localStorage.expenses = JSON.stringify(store.getState().expenses)
    }
)

import 'normalize.css';
import './styles/styles.scss'

ReactDOM.render( jsx , document.getElementById('app') )
