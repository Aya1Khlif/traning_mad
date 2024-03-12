import './Details.css'
import img from '../../assets/aad.png'
import start from '../../assets/starsvg.svg'
import round_1 from '../../assets/round1.svg'
import round_2 from '../../assets/round2.svg'
import round_3 from '../../assets/round3.svg'
import min from '../../assets/min.svg'
import plus from '../../assets/plus.svg'
const Details = () => {
    return (
        <div className="mt-[216px]">
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <a href="#" className="block transition hover:text-gray-700">
                            <span className="sr-only"> Home </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </a>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> Plain Tee </a>
                    </li>
                </ol>
            </nav>
            <div className="Ak-Details max-w-[80%] mx-auto mt-[50px]">
                <h1 className="">Honda - Civic Type R</h1>
                <p>6000 cc</p>
            </div>
            <div className='lg:flex'>
                <div className='lg:w-1/2 flex items-center'>
                    <img src={img} alt="this is image" />
                </div>
                <div className='Ak-bg-img lg:w-1/2 flex  justify-center  pt-[100px] pl-10'>
                    <div className='Ak-bg-img-2 w-1/2 flex flex-col justify-center gap-10'>
                        <h2>Details</h2>
                        <p>Rating And Review</p>
                        <div className='flex gap-3 w-1/2'>
                            <img src={start} alt="" />
                            <img src={start} alt="" />
                            <img src={start} alt="" />
                            <img src={start} alt="" />
                        </div>
                        <div className='Ak-dec '>
                            <h2>Desciption</h2>
                            <p className=''>The culmimination of comfort,luxury,and powerrul living is embodied
                                in the First-Ever BMWX7 -the biggest BMW ever built.</p>
                        </div>
                        <div className='Ak-color'>
                            <h1>Colors</h1>
                            <div className="flex gap-10 mt-4">
                                <img src={round_1} alt="" />
                                <img src={round_2} alt="" />
                                <img src={round_3} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            <div className='flex items-center gap-3'>
                            
                                <img src={min} alt="" />
                                <span className='number'>1</span>
                                <img src={plus} alt="" />
                            </div>
                            <div>
                                <h2 className='price'>Price : <span className='Ak'>250 $</span></h2>
                            </div>
                            <div className='flex gap-3 mt-5'>
                               <button className='search-2'>Add To Card</button>  
                                <button className='search'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
