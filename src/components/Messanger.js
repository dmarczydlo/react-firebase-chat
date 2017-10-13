import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import * as firebase from 'firebase';

class Messanger extends Component {

    constructor(state) {
        super(state);
        this.state = {
            message: '',
            author: '',
            error: '',
            showError: false
        };
    }

    componentDidMount() {
        const author = localStorage.getItem('author') || '';
        this.setState({
            author: author
        });
    }

    handleRequestClose = () => {
        this.setState({
            showError: false
        });
    };

    updateMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    };

    sendMessage = () => {

        const {author, message} = this.state;

        if (!author || !message) {
            const error = true;
            let message_error;
            if (!author)
                message_error = 'Enter login!';
            if (!message)
                message_error = 'Enter Message!';

            this.setState({
                showError: error,
                error: message_error
            });
        }

        const rootRef = firebase.database().ref().child('chat');
        const messagesRef = rootRef.child('messages');

        // const today = new Date();
        // const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

        this.setState({
            showError: true,
            error: 'Sending message...'
        });

        messagesRef.push({
            author: localStorage.getItem('author') || 'test',
            message: this.state.message,
            timestamp: Date.now()
        });

        this.setState({
            message: ''
        });

    };

    onChangeAuthor = (event) => {
        this.setState({
            author: event.target.value
        });
        localStorage.setItem('author', event.target.value);
    };

    render() {
        return (

            <div className="col-md-5 col-xs-12">
                <TextField
                    disabled={false}
                    hintText="Login"
                    value={this.state.author}
                    onChange={this.onChangeAuthor}
                />
                <br />
                <TextField
                    disabled={false}
                    multiLine
                    hintText="Message"
                    rows={5}
                    rowsMax={10}
                    onChange={this.updateMessage}
                    value={this.state.message}
                />
                <br /> <br />
                <RaisedButton
                    label="Send Message"
                    primary={true}
                    onClick={this.sendMessage}
                />
                <br /> <br />

                <Snackbar
                    open={this.state.showError}
                    message={this.state.error}
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}
                />

            </div>
        );
    }

}

export default Messanger;