import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { history } from './store/reducers'
import rootSaga from './store/sagas'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
