import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { Conversation } from './Conversation';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function SideBar(){

  const [conversations,setConversation] = useState([
    {
      name:"User1",
      lastmessage:"Hiii...",
      timeStamp:"Tomorrow"
    },
    {
      name:"User2",
      lastmessage:"How are you?",
      timeStamp:"Today"
    },
    {
      name:"User3",
      lastmessage:"Hiii...",
      timeStamp:"2 days ago"
    }
  ]);

  const navigate = useNavigate();

    return(
        <div className="side-bar-container">
        
        <div className='header_sidebar'>
           <div className='user_icon'>
           <IconButton>
           <AccountCircleIcon />
           </IconButton>
           </div>
           <div className='other_icons'>
           <IconButton onClick={()=>{
            navigate('online-users');
           }}>
           <PersonAddIcon />
           </IconButton> 

           <IconButton onClick={()=>{
            navigate('groups');
           }}>
           <GroupAddIcon />
           </IconButton>

           <IconButton onClick={()=>{
            navigate('create-groups');
           }} >
            <AddCircleIcon />
           </IconButton>
           <IconButton>
           <NightlightIcon />
           </IconButton>
           </div>
        </div>

        <div className='search_sidebar'>
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input className='srh-box' type="a"  placeholder='search'/>
        </div>

        <div className='chats_sidebar'>
          {
            conversations.map((conversation)=>{
              return <Conversation props={conversation} key={conversation.name}
              
              />
            })
          }
        </div>

        </div>
    );
}