import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import {useSelector} from 'react-redux';

export function CreateGroups(){
    const lighTheme = useSelector((state) => state.themeKey);

    return(
        <div className={'createGroups-cont' + ((lighTheme)?"":" dark")}  >
            <input placeholder="Enter Group Name" className={'srh-box' + ((lighTheme)?"":" dark")}  />
            <IconButton>
                <DoneOutlineIcon className={'icon' + ((lighTheme)?"":" dark")}  />
            </IconButton>
        </div>
    )
} 