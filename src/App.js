import React, {Component} from 'react';
import './assets/bootstrap.min.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Messanger from './components/Messanger';
import Quenque from './components/Quenque';
import {Card} from 'material-ui/Card';
import "./assets/style.css"
import reverseObject from './utils/reverse_object';

import * as firebase from 'firebase';

const initialData = {
    'abc': {
        'author': 'chat',
        'message': 'witaj na czacie',
        'timestamp': '1507839529789'
    }
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: initialData
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('chat');
        const messagesRef = rootRef.child('messages').orderByChild('timestamp').limitToLast(10);

        messagesRef.on('value', snap => {
            let retObj = {};
            snap.forEach(function (child) {
                const bodyObj = {};
                bodyObj[child.key] = child.val();
                retObj = {...retObj, ...bodyObj}
            });

            this.setState({
                messages: reverseObject(retObj) || initialData
            });
        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Simple Firebus Chat"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <div className={`mainContent col-md-offset-1 col-md-10 col-xs-12`}>
                        <Card>
                            <Messanger/>
                            <Quenque messages={this.state.messages}/>

                        </Card>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
