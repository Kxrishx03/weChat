import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { Conversation } from './Conversation';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

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
  const dispatch = useDispatch();
  const lighTheme = useSelector((state) => state.themeKey ); 
  
    return(
        <div className="side-bar-container">
        
        <div className={'header_sidebar' + ((lighTheme)?"":" dark")}>
           <div className= 'user_icon'>
           <IconButton>
           <AccountCircleIcon 
            className={'icon' + ((lighTheme)?"":" dark")}
           />
           </IconButton>
           </div>
           <div className='other_icons'>
           <IconButton onClick={()=>{
            navigate('online-users');
           }}>
           <PersonAddIcon 
             className={'icon' + ((lighTheme)?"":" dark")}
           />
           </IconButton> 

           <IconButton onClick={()=>{
            navigate('groups');
           }}>
           <GroupAddIcon 
             className={'icon' + ((lighTheme)?"":" dark")}
           />
           </IconButton>

           <IconButton onClick={()=>{
            navigate('create-groups');
           }} >
            <AddCircleIcon  className={'icon' + ((lighTheme)?"":" dark")}/>
           </IconButton>


           <IconButton onClick={()=>{
                dispatch(toggleTheme())
           }}>
           {
            lighTheme &&
            <NightlightIcon />
           }
             
           {
            !lighTheme &&
            <LightModeIcon  className={'icon' + ((lighTheme)?"":" dark")}/>
           }
           </IconButton>
           </div>
        </div>

        <div 
         className={'search_sidebar' + ((lighTheme)?"":" dark")}
        >
        <IconButton>
        <SearchIcon  className={'icon' + ((lighTheme)?"":" dark")} />
        </IconButton>
        <input 
         className={'srh-box' + ((lighTheme)?"":" dark")} 
       
        type="a"  placeholder='search'/>
        </div>

        <div 
        className={'chats_sidebar' + ((lighTheme)?"":" dark")}
        >
          {
            conversations.map((conversation)=>{
              return <Conversation
               className={'icon' + ((lighTheme)?"":" dark")} 
               props={conversation} key={conversation.name}
              
              />
            })
          }
        </div>

        </div>
    );
}