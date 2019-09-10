import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 20000,
    createdAt: 45999
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 2239,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Gass bill',
    amount: 4500,
    createdAt: 2882
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
