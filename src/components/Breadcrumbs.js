import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import  "./Breadcrumbs.css"


export default function BasicBreadcrumbs(props) {
    return (
        <div role="presentation" className='my-2 BasicBreadcrumbs'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                    Dashboard
                </Link>
                <Typography>{props.page}</Typography>
            </Breadcrumbs>
        </div>
    );
}