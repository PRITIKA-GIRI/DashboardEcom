import CategoryHorizontalBarChart from './_components/barchart'
import DashboardCard from './_components/dashboard-card'
import SalesLineChart from './_components/linegraph'
import CategoryPieChart from './_components/piechart'


const Dashboard = () => {
    return (
        <div className="flex flex-col gap-[28px]">
            <p className="text-[32px] font-semibold text-white">Dashboard</p>
            <DashboardCard />
            <SalesLineChart />
            <div className='grid grid-cols-2 gap-4'>
                <CategoryPieChart />
                <CategoryHorizontalBarChart/>
            </div>
            
        </div>

    )

}

export default Dashboard