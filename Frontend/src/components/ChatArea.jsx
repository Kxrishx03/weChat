import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { MessageOther } from './MessageOther';
import { MessageYou } from './MessageYou';

export function ChatArea({props}){
    return(
        <div className="chat-area-container">
            <div className="chat-area-header">
             <p className="chat-icon">{props.name[0]}</p>
             <div className='chat-title-status'>
             <p className="chat-title">{props.name}</p>
             <p className="chat-status"> {props.timeStamp}</p>
             </div>
           
               <p className="chat-del-btn">
                <IconButton>
                <DeleteIcon/>
                </IconButton>
             </p>
             
            </div>

            <div className="chat-area-convo">
             <MessageOther />
             <MessageYou />
             <MessageOther />
             <MessageYou />
             <MessageOther />
             <MessageYou />
             <MessageOther />
             <MessageYou />
             <MessageOther />
             <MessageYou />
             <MessageOther />
             <MessageYou />
             
            </div>

            <div className="chat-area-send">
            <input placeholder='Type a message' className='message-bar'></input>
               <IconButton>
               <SendIcon />
               </IconButton>
            </div>
        </div>
    );
}