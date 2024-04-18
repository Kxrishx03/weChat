import logo from './icons/logo.png';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from 'react-redux';


export function Groups(){

     const lighTheme = useSelector((state) => state.themeKey);

    return (
        <div className="list-cont"
        >
            <div 
             className={'list-cont-header' + ((lighTheme)?"":" dark")}>
               <div >
               <img className='list-icon' src={logo} alt="logo" />
               </div>
               <div className='list-title'>
               <p className={'icon' + ((lighTheme)?"":" dark") } >Available Groups</p>
               </div>
            </div>



        <div 
        className={'search_sidebar' + ((lighTheme)?"":" dark")}
        >
        <IconButton>
        <SearchIcon  className={'icon' + ((lighTheme)?"":" dark")} />
        </IconButton>
        <input className={'srh-box' + ((lighTheme)?"":" dark") } type="text"  placeholder='search'/>
        </div>

        <div className='users_list'>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div>
        <div 
        className={'user-list-area' + ((lighTheme)?"":" dark") }>
             <p  className={'user-icon' + ((lighTheme)?"":" light_dark") } >T</p>
             <div >
             <p className={'user-list-title' + ((lighTheme)?"":" dark") } >Test</p>
             </div>  
        </div> 


        
        </div>

        </div>
    )
}