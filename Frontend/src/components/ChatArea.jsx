import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export function ChatArea({props}){
    return(
        <div className="chat-area-container">
            <div className="chat-area-header">
             <p className="chat-icon">{props.name[0]}</p>
             <p className="chat-title">{props.name}</p>
             <p className="chat-status"> {props.timeStamp}</p>
             <p className="chat-del-btn">
                <IconButton>
                <DeleteIcon/>
                </IconButton>
             </p>
            </div>

            <div className="chat-area-convo">
             Messges appear
            </div>

            <div className="chat-area-send">
               Send message from here
            </div>
        </div>
    );
}