import { SideBar } from './SideBar';
import { ChatArea } from './ChatArea';
import { useState } from 'react';
export function MainContainer(){

    const [conversation,setConversation]=useState({
        name:"User1",
        lastmessage:"Hiii...",
        timeStamp:"Tomorrow"
    });

    return(
        
           <div className="main_container">
            <SideBar/>
            <ChatArea props={conversation} /> 
           </div> 
        
    )
}