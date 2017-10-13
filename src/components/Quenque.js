import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

class Quenque extends Component {


    render() {
        const {messages} = this.props;

        return (
            <div className="col-md-5 col-xs-12 ">
                <List>
                    <Subheader inset={true}>Messages</Subheader>

                    {Object.keys(messages).map((key, index) => (
                        <ListItem
                            key={index}
                            leftAvatar={<Avatar icon={<FileFolder/>}/>}
                            primaryText={`${messages[key].author}: ${messages[key].message}`}
                            secondaryText={messages[key].timestamp}
                        />
                    ))}
                </List>
            </div>
        );
    }
}

export default Quenque;