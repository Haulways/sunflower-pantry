import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import HeaderSlider from '../HeaderSlider';
import HeaderImage1 from '../../assets/images/header-image1.jpg';
import HeaderImage2 from '../../assets/images/header-image2.jpg';
import HeaderImage3 from '../../assets/images/header-image3.jpg';

export default function Home(){
    const [activeIndex, setActiveIndex] = useState(0);
    const CustomPagination = ({ slideCount, onBulletClick }) => {
        const bullets = Array.from({ length: slideCount }).map((_, index) => (
            <>
                <div
                    key={index}
                    className={`custom-bullet w-[100px] h-full bg-[#FFF] ${activeIndex === index ? 'active-bullet' : ''}`}
                    onClick={() => onBulletClick(index)}
                ></div>
                
            </>
        ));
        const bulletNumber = Array.from({ length: slideCount }).map((_, index) => (
            <>
                <div
                    key={index}
                >0{index+1}</div>
                
            </>
        ));
    
        return(
            <>
                <div className='flex items-center'>
                    <div className='w-[20px] flex items-center justify-center'>{bulletNumber[0]}</div>
                    <div className="custom-pagination flex xui-flex-ai-center px-[10px] h-[5px]">{bullets}</div>
                    <div className='w-[20px] flex items-center justify-center'>{bulletNumber[2]}</div>
                </div>
                
            </>
        );
    };
    
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <div className='relative'>
            <div className="h-full w-full flex items-center lg:pl-[50px] pl-[20px] absolute z-10 text-[#FFF]">
                <div className='lg:pt-[120px] pb-[70px] pt-[50px] w-full'>
                <h1 className="lg:text-[350%] text-[250%] lg:w-[40%] w-full font-bold xui-font-9" data-aos="fade-up" data-aos-duration="800">Welcome To Sunflower Pantry</h1>
                <p className='text-[90%] mt-[1rem] tracking-[.25em]'>Where Good Food Grows!</p>
                    <div className='flex lg:flex-row flex-col items-center mt-[2rem]'>
                        <div className='xui-lg-col-6 xui-col-12 '>
                            <section className="hx-category-line-box xui-d-grid xui-grid-col-3 xui-flex-ai-center xui-grid-gap-1 xui-py-1">
                                <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg text-center">Vegetables</div>
                                <div data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg text-center">Pumpkin</div>
                                <div></div>
                                <div data-aos="fade-in" data-aos-delay="600" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg text-center">Wheat</div>
                                <div data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg text-center">Fruits</div>
                                <div data-aos="fade-in" data-aos-delay="1000" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg text-center">Rice</div>
                            </section>
                        </div>
                        <div className='xui-lg-col-6 xui-col-12 relative lg:block hidden overflow-hidden'>
                            <CustomPagination slideCount={3} activeIndex={0} onBulletClick={(index) => console.log(index)} />
                            <HeaderSlider />
                        </div>
                    </div>
                </div>
                
            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                direction="vertical"
                speed={200}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={true}
                effect='fade'
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={breakpoints}
                className="header-swiper"
                >
                <SwiperSlide>
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url('${HeaderImage1}')`}}>
                        <div className="xui-overlay-1 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url('${HeaderImage2}')`}}>
                        <div className="xui-overlay-1 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url('${HeaderImage3}')`}}>
                        <div className="xui-overlay-1 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                            
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
            
            {/* <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url(https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais)`}}>
                <div className="xui-overlay-1 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                    <div className="basis-[60%]">
                        <h1 className="text-[300%] font-medium">Welcome to Sunflower Pantry, Your Gateway to Freshness and Convenience</h1>
                        <section className="hx-category-line-box xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-py-1">
                            <span className="hx-cat-badge cta-btn glass-bg text-center">Wheat</div>
                            <span className="hx-cat-badge cta-btn glass-bg text-center">Rice</div>
                            <span className="hx-cat-badge cta-btn glass-bg text-center">Pumpkin</div>
                            <span className="hx-cat-badge cta-btn glass-bg text-center">Vegetables</div>
                            <span className="hx-cat-badge cta-btn glass-bg text-center">Fruits</div>
                        </section>
                    </div>
                </div>
            </div> */}
        </>
    );
}