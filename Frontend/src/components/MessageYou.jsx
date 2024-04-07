export function MessageYou(){
    var props2 ={
        message:"This is a sample message",
        selfTimeStamp:"23:00"
    }
    return(
        <div className="self-message-cont">
            <div className="message-box">
                 
                 <p>{props2.message}</p>
                 
                
                <p className="self-timeStamp">{props2.selfTimeStamp}</p>
                
            </div>
        </div>
    )
}