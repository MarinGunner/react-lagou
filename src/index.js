import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ErrorBoundary from './container/common/errorBoundary/ErrorBoundary'
import store from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
