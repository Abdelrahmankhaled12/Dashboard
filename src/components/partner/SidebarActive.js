import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="sidebar bg-nav_color  items-center flex-col duration-500 hidden md:flex">
                <div className='flex items-center mt-3 mb-8'>
                    <AcUnitIcon sx={{ fontSize: 40, color: ["#4782da"] }} /> <p className='text-[20px] text-white font-semibold ms-1'>Mira</p>
                </div>
                <ul className='w-[230px]'>
                    <li className="text-white font-semibold text-[17px] bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon sx={{ color: ["#2970FF"] }} /><span className='ms-1'>Dashboard</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Analytics </span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>SaaS</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Pages</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Customers</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Orders</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Orders</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Orders</span></Link></li>
                    <li className="text-white font-semibold text-[17px] hover:bg-nav-item-active-bg p-1 mb-3 mt-3 rounded-lg cursor-pointer duration-500"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon /><span className='ms-1'>Orders</span></Link></li>
                </ul>
            </div>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><DehazeIcon /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}