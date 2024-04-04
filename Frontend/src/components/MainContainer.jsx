import { SideBar } from './SideBar';
import { ChatArea} from './ChatArea'
export function MainContainer(){
    return(
        
           <div className="main_container">
            <SideBar/>
            <ChatArea />
           </div> 
        
    )
}