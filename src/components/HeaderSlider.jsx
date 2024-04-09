import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

export default function HeaderSlider(){
    
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
        <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            speed={400}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={true}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={breakpoints}
            className="header-swiper2 w-[600px] !pr-[14rem] mt-[1.5rem]"
            >
            <SwiperSlide>
                <div className="p-[1rem] glass-bg rounded-[1rem] flex items-center">
                    <img className='w-[180px] h-[120px] rounded-[1rem]' src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                    <h3 className='text-[100%] w-[40%] ml-[1rem] font-medium'>Create culinary masterpieces right here.</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[1rem] rounded-[1rem] glass-bg flex items-center">
                    <img className='w-[180px] h-[120px] rounded-[1rem]' src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                    <h3 className='text-[100%] w-[40%] ml-[1rem] font-medium'>Share delicious recipes in video form.</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="p-[1rem] rounded-[1rem] glass-bg flex items-center">
                    <img className='w-[180px] h-[120px] rounded-[1rem]' src="https://img.freepik.com/free-photo/ecofriendly-fresh-market-produce_482257-76147.jpg?size=626&ext=jpg&ga=GA1.2.3493108.1707066373&semt=ais" alt="" />
                    <h3 className='text-[100%] w-[40%] ml-[1rem] font-medium'>Connect users with quality foodstuffs vendors.</h3>
                </div>
            </SwiperSlide>
            
            
        
        </Swiper>
            
        </>
    );
}