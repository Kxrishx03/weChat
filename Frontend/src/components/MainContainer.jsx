import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';

export function MainContainer(){

    const lighTheme = useSelector((state) => state.themeKey);
    return(
        
           <div 
           className={'main_container' + ((lighTheme)?"":" light_dark")}>
            <SideBar/>
            <Outlet />
            
           {/*<CreateGroups />*/}
           {/* <ChatArea  />*/}  
           {/* <OnlineUsers />*/}
          
           </div> 
        
    )
}