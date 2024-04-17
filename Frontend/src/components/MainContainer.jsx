import { SideBar } from './SideBar';
import { ChatArea } from './ChatArea';
import { Welcome } from './Welcome';
import { CreateGroups } from './CreateGroups';
import { OnlineUsers } from './OnlineUsers';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
export function MainContainer(){

    const [conversation,setConversation]=useState({
        name:"User1",
        lastmessage:"Hiii...",
        timeStamp:"Tomorrow"
    });

    return(
        
           <div className="main_container">
            <SideBar/>
            <Outlet />
            
            {/*<CreateGroups />*/}
           {/* <ChatArea props={conversation} />*/}  
           <OnlineUsers />
          
           </div> 
        
    )
}