export function MessageOther(){
    var props = {
          name:"OtherUser",
          message:"This is sample..",
          otherTimeStamp:"23:00"
    };

    var props = {
        name:"You",
        message:"This is sample message..",
        otherTimeStamp:"23:00"
  };
      
    return(

        <div className="other-message-cont">   
         <div>
         <p className="other-icon">
            {props.name[0]}
         </p>
         </div>

         <div className="other-message-box">
         <p className="other-title">
           {props.name}
           </p>
           <p className="other-lstmssg">
           {props.message}
           </p>
           
             <div>
             <p className="other-lstseen">
                {props.otherTimeStamp}
            </p>
             </div>
            
         </div>

           
        </div>
    )
}