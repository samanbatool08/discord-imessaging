import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Chat() {
    return (
        <div className='chat'> 
            <ChatHeader />

            <div className='chat__messages'>

            </div>

            <div className='chat__input'>
                <AddCircleIcon fontSize='large'/>
                <form>
                    <input placeholder={`message #TESTCHANNEL`} />
                </form>
            </div>
        </div>


    )
}

export default Chat;
