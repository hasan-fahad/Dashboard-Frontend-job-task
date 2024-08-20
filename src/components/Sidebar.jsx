
import { FaTachometerAlt } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
			<a href='/' className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Shopify</a>
			<ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white'>
					<FaTachometerAlt />
					<a href="/dashboard"><span className='hidden md:inline'>Dashboard</span></a>
				</li>
				
			</ul>
		</div>
	)
}

export default Sidebar