import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import * as firebase from 'firebase';


const initialData = {
    'abc': {
        'author': 'chat',
        'message': 'witaj na czacie',
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
        const messagesRef = rootRef.child('messages');

        messagesRef.on('value', snap => {
            this.setState({
                messages: snap.val() || initialData
            });
        });
    }

    render() {
        const messages = this.state.messages;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    Messages :
                    {Object.keys(messages).map((key, index) => (
                        <div>{messages[key].author}: {messages[key].message}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
