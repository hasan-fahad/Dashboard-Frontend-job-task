import { dataLine, dataBar } from '../assets/chartData'
import {Line, Bar} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
import CustomerLifetimeValueChart from './Charts/CustomerLifeTimeValueChart'
import TotalSalesChart from './Charts/TotalSalesChart'
import SalesGrowthRateChart from './Charts/SalesGrowthRateChart'
import NewCustomersChart from './Charts/NewCustomersChart'
import RepeatCustomersChart from './Charts/RepeatCustomersChart'
import GeographicalDistributionChart from './Charts/GeographicalDistributionChart'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
  return (
    <div className='grow p-8'>
        <h2 className='text-2xl mb-4'>Shopify Data Visualization</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Total Sales Over Time</h3>
                <TotalSalesChart/>
            </div>
            
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Sales Growth Rate Over Time</h3>
                <SalesGrowthRateChart/>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>New Customers Added Over Time</h3>
               <NewCustomersChart/>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Number of Repeat Customers</h3>
               <RepeatCustomersChart/>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Geographical Distribution of Customers</h3>
                <GeographicalDistributionChart/>
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Customer Lifetime Value by Cohorts</h3>
                <CustomerLifetimeValueChart/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard