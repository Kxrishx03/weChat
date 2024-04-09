
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
export function CreateGroups(){
    return(
        <div className="createGroups-cont">
            <input placeholder="Enter Group Name" className="srh-box" />
            <IconButton>
                <DoneOutlineIcon />
            </IconButton>
        </div>
    )
} 