export function Conversation({props}){
    
    return(
        <div className="conversation-cont">
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