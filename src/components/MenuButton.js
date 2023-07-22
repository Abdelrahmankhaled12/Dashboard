import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./MenuButton.css";

const StyledMenu = ((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))


export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Today: April 29
            </Button>
                <StyledMenu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        Today
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Yesterday
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Last 7 days
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Last 30 days
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        This month
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Last month
                    </MenuItem>
                </StyledMenu>
        </div>
    );
}