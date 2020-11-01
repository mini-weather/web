import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import configureStore from "./app/store/index";
import { MuiThemeProvider } from '@material-ui/core/styles'
import { englishTheme } from './app/utils/theme'


let { store } = configureStore();

ReactDOM.render(
    <MuiThemeProvider theme={englishTheme}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
