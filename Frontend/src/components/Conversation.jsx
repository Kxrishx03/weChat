import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';

export function Conversation({props}){
    const navigate = useNavigate();
    const lighTheme = useSelector((state) => state.themeKey);

    return(
        <div className="conversation-cont" onClick={()=>{
            navigate('chat')
          } }>
           <p
            
               className={'con-icon' + ((lighTheme)?"":" light_dark") }
               
           >
            {props.name[0]}
           </p>
           <p 
            className={'con-title' + ((lighTheme)?"":" title") }>
           {props.name}
           </p>
           <p className="con-lstmssg">
           {props.lastmessage}
           </p>
           <p  className={'con-lstseen' + ((lighTheme)?"":" title") }>
            {props.timeStamp}
           </p>
        </div>
    )
}