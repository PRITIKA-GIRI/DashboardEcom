import { SimpleCard } from '@/app/(protected)/components/card'
import { DollarSign } from 'lucide-react'
import React from 'react'
import { FaUsers } from 'react-icons/fa6'

const DashboardCard = () => {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-[30px] w-full'>
            <SimpleCard
                title="14"
                description="Total Users"
                icon={FaUsers}
                iconBg="#8280FF"
                trendValue={1.3}
                trendText="Up from last week"
            />

            <SimpleCard
                title="$ 2000"
                description="Total Revenue"
                icon={DollarSign}
                iconBg="#34D399"
                trendValue={-2.1}
                trendText="Down from last week"
            />
            <SimpleCard
                title="450"
                description="Total Revenue"
                icon={FaUsers}
                iconBg="#FEC53D"
                trendValue={-2.1}
                trendText="Down from last week"
            />
            <SimpleCard
                title="180"
                description="Total Revenue"
                icon={FaUsers}
                iconBg="#34D399"
                trendValue={-2.1}
                trendText="Down from last week"
            />
        </div>
    )
}

export default DashboardCard