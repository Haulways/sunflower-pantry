import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import WhyUs1 from "../../assets/images/whyus-1.jpg";
import WhyUs2 from "../../assets/images/whyus-2.jpg";
import WhyUs3 from "../../assets/images/header-image1.jpg";
import WhyUs4 from "../../assets/images/header-image2.jpg";
import { ArrowRight } from 'iconsax-react';

export default function Whyus(){
    const [activeTab, setActiveTab] = useState(0);

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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <section className='lg:px-[50px] px-[20px] pt-[20px] lg:pb-[170px] pb-[60px] overflow-x-hidden'>
            <div className='xui-row'>
                <div data-aos="fade-right" data-aos-duration="800" className='xui-lg-col-6 xui-col-12'>
                    <p className='xui-opacity-8 text-[80%]'>(04)</p>
                    <p className='text-[100%]'>Why Choose Us</p>
                    <h3 className='xui-opacity-8 text-[105%] lg:w-[70%] w-full mt-[8rem] xui-font-9'>Discover the flavors of fresh produce, indulge in gourmet treats, and uncover hidden gems that will elevate your cooking to new heights.</h3>
                </div>
                <div className='xui-lg-col-6 xui-col-12 lg:mt-[0] mt-[20px]'>
                    <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[120%] xui-font-9'>We take pride in being your go-to platform for a delightful shopping experience. From farm-fresh produce to artisanal delights, our pantry is stocked with a diverse selection of premium ingredients sourced from trusted suppliers</h1>
                    <Link data-aos="fade-down" data-aos-delay="600" data-aos-duration="800" to="/" className="inline-flex items-center mt-[2rem]">
                        <div className="px-[2rem] py-[1rem] bg-[#fff] rounded-[100px] border border-black">
                            <p className='text-[80%]'>LEARN MORE</p>
                        </div>
                        <div className="w-[50px] h-[50px] ml-[-5px] flex justify-center items-center py-[1rem] bg-[#000] rounded-[50%]">
                            <MoveUpRight color='#FFF' />
                        </div>
                    </Link>
                    
                </div>
            </div>
            <Swiper
                modules={[Autoplay]}
                direction="horizontal"
                speed={500}
                spaceBetween={20}
                slidesPerView={2}
                autoplay={true}
                onSwiper={(swiper) => console.log(swiper)}
                // breakpoints={breakpoints}
                className="whyus-swiper !pr-[12rem] mt-[3rem] !mr-[-5rem]"
            >
                <SwiperSlide>
                    <div className="bg-cover bg-center flex w-full h-full rounded-[12px]"
                        style={{backgroundImage: `url(${WhyUs1})`}}>
                        <div className='xui-overlay-1 rounded-[1rem] h-full w-full flex items-end p-[2rem]'>
                            <div>
                                <h3 className='text-[150%] xui-font-9'>Diverse Selection</h3>
                                <p className='text-[90%] mt-[.5rem] xui-opacity-8 xui-line-height-1-half lg:w-[70%] w-full'>Explore a wide array of products curated to meet your culinary needs.</p>
                                <Link className='flex items-center justify-between bg-[#FFF] p-[1rem] mt-[1rem] rounded-[1.3rem]'>
                                    <p className='text-[90%] text-black'>MORE DETAILS</p>
                                    <ArrowRight size='19px' color='#000'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center flex w-full h-full rounded-[12px]"
                        style={{backgroundImage: `url(${WhyUs2})`}}>
                        <div className='xui-overlay-1 rounded-[1rem] h-full w-full flex items-end p-[2rem]'>
                            <div>
                                <h3 className='text-[150%] xui-font-9'>Fresh From the Farm</h3>
                                <p className='text-[90%] mt-[.5rem] xui-opacity-8 xui-line-height-1-half lg:w-[70%] w-full'>Our commitment to freshness is unparalleled. We source directly from local farms,</p>
                                <Link className='flex items-center justify-between bg-[#FFF] p-[1rem] mt-[1rem] rounded-[1.3rem]'>
                                    <p className='text-[90%] text-black'>MORE DETAILS</p>
                                    <ArrowRight size='19px' color='#000'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center flex w-full h-full rounded-[12px]"
                        style={{backgroundImage: `url(${WhyUs3})`}}>
                        <div className='xui-overlay-1 rounded-[1rem] h-full w-full flex items-end p-[2rem]'>
                            <div>
                                <h3 className='text-[150%] xui-font-9'>Quality Assurance</h3>
                                <p className='text-[90%] mt-[.5rem] xui-opacity-8 xui-line-height-1-half lg:w-[70%] w-full'>Sunflower Pantry is dedicated to providing you with nothing but the best. </p>
                                <Link className='flex items-center justify-between bg-[#FFF] p-[1rem] mt-[1rem] rounded-[1.3rem]'>
                                    <p className='text-[90%] text-black'>MORE DETAILS</p>
                                    <ArrowRight size='19px' color='#000'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center flex w-full h-full rounded-[12px]"
                        style={{backgroundImage: `url(${WhyUs4})`}}>
                        <div className='xui-overlay-1 rounded-[1rem] h-full w-full flex items-end p-[2rem]'>
                            <div>
                                <h3 className='text-[150%] xui-font-9'>Diverse Selection</h3>
                                <p className='text-[90%] mt-[.5rem] xui-opacity-8 xui-line-height-1-half lg:w-[70%] w-full'>Explore a wide array of products curated to meet your culinary needs.</p>
                                <Link className='flex items-center justify-between bg-[#FFF] p-[1rem] mt-[1rem] rounded-[1.3rem]'>
                                    <p className='text-[90%] text-black'>MORE DETAILS</p>
                                    <ArrowRight size='19px' color='#000'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
                
                
            </Swiper>
            
        </section>
        </>
    );
}