import Hero from '../../components/Hero/Hero'
import './Home.css'
import car_1 from '../../assets/car1.png'
import car_2 from '../../assets/car2.png'
import car_3 from '../../assets/car3.png'
import car_4 from '../../assets/car4.png'
import Slider from '../../components/Slider/Slider_img'
import CategoryCard from './CategoryCard/CategoryCard'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const Category_information = [
    { img: car_1 },
    { img: car_2 },
    { img: car_3 },
    { img: car_4 }
  ]
  return (
    <>
      <Hero />
      <section className='AK-section-2 '>
        {/* <Slider /> */}
      </section>
      <section className='lg:mt-[350px] mt-[50px]'>
         <Slider />
      </section>
      <section className='Ak-category max-w-[90%] mx-auto'>
        <h2 className='desktop:text-[69px] text-[40px] 2xl:mt-[195px]'>Top Categories</h2>
        <div className='flex flex-wrap justify-center 2xl:mt-[80px] mt-[40px] gap-[100px]'>
          {
            Category_information.map(item => (
              <>
                <CategoryCard key={item.img} img={item.img} />
              </>
            ))
          }
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home
