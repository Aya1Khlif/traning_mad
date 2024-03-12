
import icon_card from '../../../assets/seat-svgrepo-com(1) 1.svg'
import icon_card_2 from '../../../assets/wheel-to-control-vehicles-svgrepo-com(1) 2.svg'
import icon_card_3 from '../../../assets/asd.svg'
import { Link } from 'react-router-dom'
const CategoryCard = ({img}) => {
    return (
        <div className='max-w-[600px] Ak-card'>
            <img src={img} alt="this is image" />
            <h2>AUDI</h2>
            <div className='flex flex-wrap justify-around  pt-[28px]'>
                <div className='flex'>
                    <img src={icon_card} alt="" />
                    <span className='Ak-span'>4 Seator</span>
                </div>
                <div className='flex'>
                    <img src={icon_card_2} alt="" />
                    <span className='Ak-span'>Manual</span>
                </div>
                <div className='flex'>
                    <img src={icon_card_3} alt="" />
                    <span className='Ak-span'>5KM/1-lt</span>
                </div>
            </div>
            <h3 className='pt-[28px]'>Starting at $500/Day</h3>
            <div className='mt-[35px] flex flex-wrap justify-center gap-3'>
             <Link to={"detalis"}><button className='Ak-details'>Details</button></Link>
             <Link to={"mycar"}>  <button className='Ak-search'>Buy Now</button></Link>   
            </div>
        </div>
    )
}

export default CategoryCard
