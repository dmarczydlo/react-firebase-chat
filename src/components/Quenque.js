import React, {Component} from 'react'
import {List} from 'material-ui/List';
import Message from './Message';

class Quenque extends Component {


    render() {
        const {messages} = this.props;

        return (
            <div className="col-md-5 col-xs-12 ">
                <List>
                    <h2>Messages List: </h2>

                    {Object.keys(messages).map((key, index) => (
                        <Message
                            message={messages[key].message}
                            author={messages[key].author}
                            timestamp={messages[key].timestamp}
                        />
                    ))}
                </List>
            </div>
        );
    }
}

export default Quenque;