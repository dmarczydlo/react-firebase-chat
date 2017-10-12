import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import configFile from './config.json';

var config = {
    apiKey: configFile.apiKey,
    authDomain: configFile.authDomain,
    databaseURL: configFile.databaseURL,
    projectId: configFile.projectId,
    storageBucket: configFile.storageBucket,
    messagingSenderId: configFile.messagingSenderId
};

firebase.initializeApp(config);


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
