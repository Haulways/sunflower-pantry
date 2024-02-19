import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

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
                <div className='flex items-center '>
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
            <div className="h-full w-full flex items-center pl-[50px] absolute z-10 text-[#FFF]">
                <div>
                <h1 className="text-[300%] w-[60%] font-medium" data-aos="fade-up" data-aos-duration="800">Welcome to Sunflower Pantry, Your Gateway to Freshness and Convenience</h1>
                    <div className='flex items-center mt-[5rem]'>
                        <div className='basis-[50%]'>
                            <section className="hx-category-line-box xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-py-1">
                                <span data-aos="fade-in" data-aos-delay="200" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg">Wheat</span>
                                <span data-aos="fade-in" data-aos-delay="400" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg">Rice</span>
                                <span data-aos="fade-in" data-aos-delay="600" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg">Pumpkin</span>
                                <span data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg">Vegetables</span>
                                <span data-aos="fade-in" data-aos-delay="1000" data-aos-duration="800" className="hx-cat-badge cta-btn glass-bg">Fruits</span>
                            </section>
                        </div>
                        <div className='basis-[50%] relative'>
                            <CustomPagination slideCount={3} activeIndex={0} onBulletClick={(index) => console.log(index)} />
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
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url(https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais)`}}>
                        <div className="backdrop-brightness-50 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url(https://img.freepik.com/premium-photo/cabinet-is-open-with-different-containers-filled-with-different-foods_674594-17367.jpg?size=626&ext=jpg&ga=GA1.1.3493108.1707066373&semt=ais)`}}>
                        <div className="backdrop-brightness-50 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url(https://img.freepik.com/free-photo/part-modern-kitchen-place-cooking-extractor-stove_169016-19751.jpg?size=626&ext=jpg&ga=GA1.1.3493108.1707066373&semt=ais)`}}>
                        <div className="backdrop-brightness-50 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                            
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
            
            {/* <div className="bg-cover bg-center xui-h-fluid-100" style={{backgroundImage: `url(https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais)`}}>
                <div className="backdrop-brightness-50 flex w-full h-full pt-[180px] pl-[50px] text-[#FFF] pb-[300px]">
                    <div className="basis-[60%]">
                        <h1 className="text-[300%] font-medium">Welcome to Sunflower Pantry, Your Gateway to Freshness and Convenience</h1>
                        <section className="hx-category-line-box xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-py-1">
                            <span className="hx-cat-badge cta-btn glass-bg">Wheat</span>
                            <span className="hx-cat-badge cta-btn glass-bg">Rice</span>
                            <span className="hx-cat-badge cta-btn glass-bg">Pumpkin</span>
                            <span className="hx-cat-badge cta-btn glass-bg">Vegetables</span>
                            <span className="hx-cat-badge cta-btn glass-bg">Fruits</span>
                        </section>
                    </div>
                </div>
            </div> */}
        </>
    );
}