import logo from './icons/logo.png';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function Groups(){
    return (
        <div className="list-cont">
            <div className="list-cont-header">
               <div >
               <img className='list-icon' src={logo} alt="logo" />
               </div>
               <div className='list-title'>
               <p >Available Groups</p>
               </div>
            </div>



        <div className='search_sidebar'>
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input className='srh-box' type="text"  placeholder='search'/>
        </div>

        <div className='users_list'>
           
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>  
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>
        <div className="user-list-area">
             <p className="user-icon">T</p>
             <div >
             <p className="user-list-title">Test</p>
             </div>
             
        </div>  

        
        </div>

        </div>
    )
}