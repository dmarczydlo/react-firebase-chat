import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Messanger from './components/Messanger';
import Quenque from './components/Quenque';
import {Card} from 'material-ui/Card';

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
        const messagesRef = rootRef.child('messages').orderByChild('timestamp').limitToLast(5);


        messagesRef.on('value', snap => {
            this.setState({
                messages: snap.val() || initialData
            });
        });
    }


    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <AppBar
                        title="Simple Firebus Chat"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Card>


                        <Messanger />
                        <Quenque messages={this.state.messages}/>

                    </Card>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
