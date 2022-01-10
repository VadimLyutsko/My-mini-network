import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {     // отрисовки при изменении UI
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    store={store}
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());      //первая отрисовка (до изменения UI)

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});                            // отдали rerenderEntireTree для вызова в State 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





