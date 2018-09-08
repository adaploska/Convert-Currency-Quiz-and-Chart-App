import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Main } from "./layouts/Main";

import {
    Route,
    HashRouter,
} from 'react-router-dom';

import './index.css';
class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <Route path='/' component={Main}/>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();

