import Slider from "react-slick";
import slide_img_1 from '../../assets/slide1.png'
import slide_img_2 from '../../assets/slide2.png'
import slide_img_3 from '../../assets/slide3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

const Slider_img = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="Slider-container relative">
            <Slider {...settings}>
                <div>
                    <img src={slide_img_1} alt="" />
                </div>
                <div>
                    <img src={slide_img_2} alt="" />
                </div>
                <div>
                    <img src={slide_img_3} alt="" />
                </div>
                <div>
                    <img src={slide_img_1} alt="" />
                </div>
                <div>
                    <img src={slide_img_1} alt="" />
                </div>
                <div>
                    <img src={slide_img_2} alt="" />
                </div>
                <div>
                    <img src={slide_img_3} alt="" />
                </div>
                <div>
                    <img src={slide_img_2} alt="" />
                </div>
                <div>
                    <img src={slide_img_1} alt="" />
                </div>
            </Slider>
            <div className="Ak-slide-bg xl:h-[190px] h-[100px] md:block hidden">
            </div>
        </div>
    )
}
export default Slider_img
