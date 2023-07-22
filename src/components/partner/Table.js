import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Project Aurora', "01/01/2023", "31/06/2023", "Done", "James Dalton"),
    createData('Project Eagle', "01/01/2023", "31/06/2023" , "In Progress", "Tracy Mack"),
    createData('Project Fireball', "01/01/2023", "31/06/2023", "Done", "Sallie Love" ),
    createData('Project Omega', "01/01/2023", "31/06/2023", "Cancelled", "Glenda Jang"),
    createData('Project Yoda', "01/01/2023", "31/06/2023" , "Done", "Raymond Ennis"),
    createData('Project Zulu', "01/01/2023", "31/06/2023", "Done", "Matthew Winters"),

];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='text-white'>Name</TableCell>
                        <TableCell align="center" className='text-white'>Start Date</TableCell>
                        <TableCell align="center" className='text-white'>End Date</TableCell>
                        <TableCell align="center" className='text-white'>State</TableCell>
                        <TableCell align="center" className='text-white'>Assignee</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className='text-white'>
                                {row.name}
                            </TableCell>
                            <TableCell align="center" className='text-white'>{row.calories}</TableCell>
                            <TableCell align="center" className='text-white'>{row.fat}</TableCell>
                            <TableCell align="center" className='text-white'> <span className={row.carbs === "Done" ? "bg-[rgb(129,199,132)] text-[13px] py-[4px] px-[12px] rounded-[20px]" : row.carbs === "In Progress" ? "bg-[rgb(255,183,77)] text-[13px] py-[4px] px-[12px] rounded-[20px]" : "bg-[rgb(229,115,115)] text-[13px] py-[4px] px-[12px] rounded-[20px]"}>{row.carbs}</span></TableCell>
                            <TableCell align="center" className='text-white'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
