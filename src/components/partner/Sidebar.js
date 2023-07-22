import AssessmentIcon from '@mui/icons-material/Assessment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';
import NestedList from './ButtonSide';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskIcon from '@mui/icons-material/Task';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Sidebar() {
    return (
        <>
            <div className="sidebar bg-nav_color  items-center flex-col duration-500 hidden md:flex">
                <div className='flex items-center mt-3 mb-8'>
                    <AcUnitIcon sx={{ fontSize: 40, color: ["#4782da"] }} /> <p className='text-[20px] text-white font-semibold ms-1'>Mira</p>
                </div>
                <ul className='w-[230px]'>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <AlignVerticalCenterIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Dashboard</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <AssessmentIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Analytics</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <BrokenImageIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>E-Commerce</span></Link></li>
                    <li className='flex items-start p-1 ms-3'><LocalMallIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer relative top-[21px]' /> <NestedList nameButton="Products" links={[{ name: "list", link: "list" }, { name: "create", link: "create" }]} /></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <LocalGroceryStoreIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Orders</span></Link></li>
                    <li className='flex items-start p-1 ms-3'><AssessmentIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer relative top-[21px]' /> <NestedList nameButton="Invoices" links={[{ name: "list", link: "list" }, { name: "Details", link: "Details" }]} /></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg hover:bg-[rgba(0,0,0,0.09)] cursor-pointer duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <PersonIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Customers</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg hover:bg-[rgba(0,0,0,0.09)] cursor-pointer duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <TaskIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Tasks</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg hover:bg-[rgba(0,0,0,0.09)] cursor-pointer duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <CalendarMonthIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Calendar</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <AccountCircleIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Account</span></Link></li>
                    <li className="hover:bg-nav-item-active-bg rounded-lg cursor-pointer hover:bg-[rgba(0,0,0,0.09)] duration-500 py-[11px] px-[4px]"><Link to="/" className='ms-3 flex items-center'> <ManageAccountsIcon className='text-[rgba(238,238,238,0.7)] text-[20px] cursor-pointer' /><span className='text-[rgba(238,238,238,1)] font-semibold text-[15px] p-1 rounded-lg cursor-pointer ms-1'>Settings</span></Link></li>
                </ul>
            </div>
        </>
    )
}


export default Sidebar;