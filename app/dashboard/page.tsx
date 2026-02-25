import React from 'react'
import {  SimpleCard } from '../components/card'
import { FaChartLine, FaUsers } from 'react-icons/fa'
import DashboardCard from './_components/dashboard-card'

const Dashboard = () => {
    return(
        <div className='flex flex-col gap-[28px]'>
            <p className='text-[32px] font-semibold text-white'>Dashboard</p>
            <DashboardCard/>
        </div>
    )
    
}

export default Dashboard