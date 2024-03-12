import './Hero.css'
import hero_img_1 from '../../assets/68f9a3c07615a35e40f6ae98efce3a76-removebg-preview 1.png'
import hero_img_2 from '../../assets/Vector 1.png'
import Name from '../../assets/iconcar.svg'
import Price from '../../assets/price.svg'
import engine from '../../assets/engine.svg'
import select from '../../assets/Frame 69.svg'
import brand from '../../assets/brand.svg'
const Hero = () => {
    const information_For_Card = [
        {
            title:'Name',
            text:'choose name',
            img:Name
        },
        {
            title:'Price',
            text:'choose price',
            img:Price
        },
        {
            title:'Engine Capicity',
            text:'choose capicity',
            img:engine
        },
        {
            title:'Brand',
            text:'choose brand',
            img:brand
        }
    ]
    
    return (
        <>
            <div className="xl:flex justify-between">
                {/* Right */}
                <div className=" AK-right-hero pt-[303px] md:pl-[151px] pl-[15px] xl-w-[50%]">
                    <p className='Ak-right-p_1 2xl:text-[25px] text-[18px]'>Arriving Summer 2019</p>
                    <h2 className='2xl:pt-[16px] desktop:text-[88px] text-[40px] desktop:leading-[103px]'>MAKE EVERY DAY
                        LEGENDARY.</h2>
                    <p className='Ak-right-p pt-[29px]'>The culmimination of comfort,luxury,and powerrul living is embodied
                        in the First-Ever BMWX7 -the biggest BMW ever built.</p>
                    <button className='Ak-button desktop:mt-[80px] mt-[40px] xl:text-[33px] text-[20px] xl:px-[25px] px-[15px] xl:py-[15px] py-[10px]'>EXPLORE</button>
                </div>
                {/* Left */}
                <div className='xl:pt-[200px]  pt-[50px] flex justify-end xl-w-[50%]'>
                    <div className='relative'>
                        <img className='absolute top-[-100px] right-0' src={hero_img_1} alt="" />
                        <img src={hero_img_2} alt="this is image" />
                    </div>
                </div>
            </div>
            <div className='AK-information flex 2xl:gap-0 gap-10 items-center 2xl:justify-between justify-center flex-wrap'>
                 {information_For_Card.map((item,index) => (
                    <div className='Ak-Name' key={index}>
                        <h3>{item.title}</h3>
                        <div className='flex gap-[13px] mt-[25px]'>
                            <img src={item.img} alt="this is icon" />
                            <p className='Ak-car'>{item.text}</p>
                            <img src={select} alt="this is image" />
                        </div>
                    </div>
                 ))}
                <button className='search-button'>Search</button>
            </div>
        </>
    )
}

export default Hero
