import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function NestedList(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'rgb(35,48,68)' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton className="flex justify-between ps-[0px]" onClick={handleClick}>
                <span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>{props.nameButton}</span>
                {open ? <ExpandLess className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /> : <ExpandMore className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Array.isArray(props.links) && props.links.map((ele , index )=>
                        <ListItemButton sx={{ pl: 4 }} key={index}>
                            <Link to={ele.link} className='text-[rgba(238,238,238,0.7)] ms-5 font-semibold text-[15px]'>{ele.name}</Link>
                        </ListItemButton>
                    )}
                </List>
            </Collapse>
        </List>
    );
}