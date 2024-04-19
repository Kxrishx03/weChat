import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { MessageOther } from './MessageOther';
import { MessageYou } from './MessageYou';

import {useSelector} from 'react-redux';

export function ChatArea(){
    const lighTheme = useSelector((state) => state.themeKey);
    const props ={
        name:"User1",
        lastmessage:"Hiii...",
        timeStamp:"Tomorrow"
    };

    return(
        <div className="chat-area-container"   >
            <div className={'chat-area-header' + ((lighTheme)?"":" dark")}>
             <p className={'chat-icon' + ((lighTheme)?"":" light_dark") }>{props.name[0]}</p>
             <div className='chat-title-status'>
             <p  className={'chat-title' + ((lighTheme)?"":" dark")}>{props.name}</p>
             <p className="chat-status"> {props.timeStamp}</p>
             </div>
           
               <p className="chat-del-btn">
                <IconButton>
                <DeleteIcon className={'icon' + ((lighTheme)?"":" dark")} />
                </IconButton>
             </p>
             
            </div>

            <div className={'chat-area-convo' + ((lighTheme)?"":" dark")}>
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

            <div   className={'chat-area-send' + ((lighTheme)?"":" dark")} >
            <input placeholder='Type a message'  className={'message-bar' + ((lighTheme)?"":" dark")}></input>
               <IconButton>
               <SendIcon className={'icon' + ((lighTheme)?"":" dark")} />
               </IconButton>
            </div>
        </div>
    );
}