import logo from './icons/logo.png';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function OnlineUsers(){
    return (
        <div className="list-cont">
            <div className="list-cont-header">
               <div >
               <img className='list-icon' src={logo} alt="logo" />
               </div>
               <div className='list-title'>
               <p >Online Users</p>
               </div>
            </div>
        <div className='search_sidebar'>
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input className='srh-box' type="a"  placeholder='search'/>
        </div>

        </div>
    )
}