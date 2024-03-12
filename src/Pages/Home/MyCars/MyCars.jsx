import bg from '../../../assets/aa.png'
import './MyCars.css'
import car from '../../../assets/cate1.png'
import car2 from '../../../assets/cate2.png'
import car3 from '../../../assets/cate3.png'
import car4 from '../../../assets/cate4.png'
const MyCars = () => {
    return (
        <div className=''>

            <div className='relative'>
                <img className='' src={bg} alt="" />
                <h1 className='absolute top-[100px] left-[30px] Ak-cars '>My Cart</h1>
            </div>
            <div className="relative overflow-x-auto  sm:rounded-lg max-w-[90%] mx-auto mt-[-300px]">
                <table className="mt-[250px] md:mt-0 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={car} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                iMac 27"
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                            <td className="px-6 py-4 ">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={car2} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                iMac 27"
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                            <td className="px-6 py-4 ">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={car3} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                iMac 27"
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                            <td className="px-6 py-4 ">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4">
                                <img src={car4} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                iMac 27"
                            </td>
                            <td className="px-6 py-4">
                                $2499
                            </td>
                            <td className="px-6 py-4 ">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default MyCars
