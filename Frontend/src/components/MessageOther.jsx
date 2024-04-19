import {useSelector} from 'react-redux';

export function MessageOther(){
    const lighTheme = useSelector((state) => state.themeKey);
    var props = {
          name:"OtherUser",
          message:"This is sample..",
          otherTimeStamp:"23:00"
    };
     
    return(

        <div className="other-message-cont">   
         <div>
         <p className={'other-icon' + ((lighTheme)?"":" light_dark") } >
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
             <p className="other-lstseen">
                {props.otherTimeStamp}
            </p>
         </div>

           
        </div>
    )
}