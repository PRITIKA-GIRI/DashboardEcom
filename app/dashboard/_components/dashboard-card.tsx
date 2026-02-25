import { SimpleCard } from '@/app/components/card'
import React from 'react'
import { FaUsers } from 'react-icons/fa6'

const DashboardCard = () => {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-[30px] w-full'>
          <SimpleCard
              title="Total Users"
              description="Total Users"
              icon={FaUsers}
              iconBg="#FACC15"
              trendValue={1.3}
              trendText="Up from last week"
          />

          <SimpleCard
              title="Total Products"
              description="Total Revenue"
              icon={FaUsers}
              iconBg="#34D399"
              trendValue={-2.1}
              trendText="Down from last week"
          />
          <SimpleCard
              title="Revenue"
              description="Total Revenue"
              icon={FaUsers}
              iconBg="#34D399"
              trendValue={-2.1}
              trendText="Down from last week"
          />
          <SimpleCard
              title="Revenue"
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