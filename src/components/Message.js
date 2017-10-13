import React, {Component} from 'react'
import MessageIcon from 'material-ui/svg-icons/communication/message';
import converter from '../utils/timestamp_converter';

import ReactEmoji from 'react-emoji';

class Message extends Component {

    render() {
        const {author, message, timestamp} = this.props;

        return (
            <div className="message">
                <MessageIcon/>
                <span className="author">({author}): </span>
                <span className="text">{ReactEmoji.emojify(message)}</span>
                <span className="timestamp">#{converter(timestamp)}</span>
            </div>
        );
    }
}

export default Message;