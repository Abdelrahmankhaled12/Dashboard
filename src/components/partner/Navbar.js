import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import image from '../../images/us.png';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TemporaryDrawer from './SidebarActive';

const settings = ['Profile', 'Sign out'];

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className='bg-backGroundColor'>
            <Container maxWidth="xl">
                <Toolbar disableGutters className='justify-between'>
                    <Box className="relative hover:bg-[rgb(18,26,36)] duration-300 px-[10px] py-[10px] rounded-[5px] hidden md:block">
                        <input placeholder='Search topics...' type="text" className='bg-transparent border-none outline-none active:outline-none pl-[30px] text-[14px] font-semibold' />
                        <SearchIcon className='absolute left-2 text-[25px]' />
                    </Box>
                    <Box className="block md:hidden" >
                        <TemporaryDrawer />
                    </Box>
                    <Stack direction="row">
                        <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736]">
                            <Tooltip title="Notifications">
                                <IconButton onClick={handleOpenUserMenu} className="text-white">
                                    <NotificationsNoneIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736]">
                            <Tooltip title="Languages">
                                <IconButton className="text-white">
                                    <img src={image} alt="" className='w-[22px] h-[22px] rounded-[50%]' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736]">
                            <Tooltip title="Account">
                                <IconButton onClick={handleOpenUserMenu} className="text-white">
                                    <SettingsPowerIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}


                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;

