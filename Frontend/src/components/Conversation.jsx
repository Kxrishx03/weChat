import { useNavigate } from "react-router-dom";

export function Conversation({props}){
    const navigate = useNavigate();
    return(
        <div className="conversation-cont" onClick={()=>{
            navigate('chat')
          } }>
           <p className="con-icon">
            {props.name[0]}
           </p>
           <p className="con-title">
           {props.name}
           </p>
           <p className="con-lstmssg">
           {props.lastmessage}
           </p>
           <p className="con-lstseen">
            {props.timeStamp}
           </p>
        </div>
    )
}