import { Container } from "@mui/system";
import CustomizedMenus from "../../MenuButton";
import PieChart from "../PieChart";
import LineChart from "../LineChart";
import BarChart from "../BarChart";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { UserData } from "../Data";
import { Box } from "@mui/material";
import BasicTable from "../Table";
import "../dashboard.css"

function Dashboard() {

    const [userData, setUserData] = useState({
        labels: UserData.map((ele) => ele.month),
        datasets: [{
            label: 'Sales ($)',
            data: UserData.map((ele) => ele["Sales ($)"])
        }]
    });

    return (
        <>
            <div className="dashboard pt-5 pb-5 pl-5 pr-5">
                <Container maxWidth="xl">
                    <div className="flex justify-between mt-4 border-b-[1px] border-solid border-[#7777774d] pb-5 flex-col mdd:flex-row">
                        <div className="text-white">
                            <h1 className="font-semibold text-[28px] mt-4">Dashboard</h1>
                            <p className="text-[16px] mt-1 text-[#ffffffe8]">Welcome back, Lucy! We've missed you. 👋</p>
                        </div>
                        <div className="mt-4">
                            <CustomizedMenus />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mdd:grid-cols-2 xl:grid-cols-4 gap-3">
                        <Box className="bg-nav_color rounded-[5px] mt-5 px-4 py-3">
                            <div className="flex justify-between items-center">
                                <p className="text-white text-[18px] font-semibold">Sales Today</p>
                                <p className="bg-blue text-[11px] text-white font-semibold py-[2px] px-[11px] rounded-[5px]">Today</p>
                            </div>
                            <h1 className="text-[28px] text-white my-1">2.532</h1>
                            <div className="flex ">
                                <p className="text-[rgb(76,175,80)] bg-[rgba(76,175,80,0.1)] py-[1px] px-[5px] me-[6px] rounded-[10px] text-[14px]">+26%</p>
                                <p className="text-[rgba(255,255,255,0.5)] text-[14px] font-semibold">Since last month</p>
                            </div>
                        </Box>
                        <Box className="bg-nav_color rounded-[5px] mt-5 px-4 py-3">
                            <div className="flex justify-between items-center">
                                <p className="text-white text-[18px] font-semibold">Visitors</p>
                                <p className="bg-blue text-[11px] text-white font-semibold py-[2px] px-[11px] rounded-[5px]">Annual</p>
                            </div>
                            <h1 className="text-[28px] text-white my-1">170.212</h1>
                            <div className="flex ">
                                <p className="text-[rgb(244,67,54)] bg-[rgba(244,67,54,0.1)] py-[1px] px-[5px] me-[6px] rounded-[10px] text-[14px]">-14%</p>
                                <p className="text-[rgba(255,255,255,0.5)] text-[14px] font-semibold">Since last month</p>
                            </div>
                        </Box>
                        <Box className="bg-nav_color rounded-[5px] mt-5 px-4 py-3">
                            <div className="flex justify-between items-center">
                                <p className="text-white text-[18px] font-semibold">Total Earnings</p>
                                <p className="bg-blue text-[11px] text-white font-semibold py-[2px] px-[11px] rounded-[5px]">Monthly</p>
                            </div>
                            <h1 className="text-[28px] text-white my-1">$ 24.300</h1>
                            <div className="flex ">
                                <p className="text-[rgb(76,175,80)] bg-[rgba(76,175,80,0.1)] py-[1px] px-[5px] me-[6px] rounded-[10px] text-[14px]">+18%</p>
                                <p className="text-[rgba(255,255,255,0.5)] text-[14px] font-semibold">Since last month</p>
                            </div>
                        </Box>
                        <Box className="bg-nav_color rounded-[5px] mt-5 px-4 py-3">
                            <div className="flex justify-between items-center">
                                <p className="text-white text-[18px] font-semibold">Pending Orders</p>
                            </div>
                            <h1 className="text-[28px] text-white my-1">45</h1>
                            <div className="flex ">
                                <p className="text-[rgb(244,67,54)] bg-[rgba(244,67,54,0.1)] py-[1px] px-[5px] me-[6px] rounded-[10px] text-[14px]">-9%</p>
                                <p className="text-[rgba(255,255,255,0.5)] text-[14px] font-semibold">Since last month</p>
                            </div>
                        </Box>
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-4 grid gap-5">
                        <div className="col-span-3 bg-nav_color rounded-[10px] mt-8">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-[20px] font-semibold">Total revenue</p>
                                    <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736] cursor-pointer">
                                        <MoreVertIcon fontSize="inherit" className="text-white text-[25px]" />
                                    </Box>
                                </div>
                                <LineChart chartData={userData} />
                            </div>
                        </div>
                        <div className="col-span-1 bg-nav_color rounded-[10px] mt-8">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-[20px] font-semibold">Weekly sales</p>
                                    <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736] cursor-pointer">
                                        <MoreVertIcon fontSize="inherit" className="text-white text-[25px]" />
                                    </Box>
                                </div>
                                <PieChart chartData={userData} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-5 grid gap-5">
                        <div className="col-span-2 bg-nav_color rounded-[10px] mt-8">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-[20px] font-semibold">Mobile / Desktop</p>
                                    <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736] cursor-pointer">
                                        <MoreVertIcon fontSize="inherit" className="text-white text-[25px]" />
                                    </Box>
                                </div>
                                <BarChart chartData={userData} />
                            </div>
                        </div>
                        <div className="col-span-3 bg-nav_color rounded-[10px] mt-8">
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-[20px] font-semibold">Latest projects</p>
                                    <Box className="duration-300 p-1 rounded-[50%] hover:bg-[#77777736] cursor-pointer">
                                        <MoreVertIcon fontSize="inherit" className="text-white text-[25px]" />
                                    </Box>
                                </div>
                                <div className="mt-5 tableProducts">
                                    <BasicTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Dashboard;
