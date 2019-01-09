import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './components/Context/Context';
import { Provider } from 'react-redux';
import store from './config/store';

const app = <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>

ReactDOM.render(app,document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk)
//   )
//
// )
