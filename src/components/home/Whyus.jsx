import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { MoveUpRight, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Activity, Global, PresentionChart } from 'iconsax-react';

export default function Whyus(){
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <section className='lg:px-[50px] px-[20px] pt-[20px] lg:pb-[170px] pb-[60px]'>
            <div className='flex flex-wrap justify-between pr-[50px]'>
                <div data-aos="fade-right" data-aos-duration="800" className='lg:w-[calc(100%-400px)] w-full'>
                    <p className='xui-opacity-6 text-[80%]'>(03)</p>
                    <p className='text-[100%]'>Why Choose Us?</p>
                </div>
                <div className='lg:w-[400px] w-full'>
                <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[170%]'>We take pride in being your go-to platform for a delightful shopping experience.</h1>
                </div>
            </div>
            <div className='flex flex-wrap mt-[40px]'>
                <div className='basis-[60%] custom-holder'>
                    <div className={'w-full flex justify-between items-center border-b cursor-pointer border-gray-400 p-[20px] ' + (activeTab === 0 ? 'bg-[#363733] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(0)}>
                        <div className='lg:w-[200px] w-auto'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <Global size="22" color="#FFF"/>
                            </span>
                        </div>
                        <div className='lg:w-[calc(100%-400px)] w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='lg:text-[140%] text-[90%]'>Diverse Selection</h3>
                        </div>
                        <div className='lg:w-[200px] w-auto flex justify-end'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <MoveUpRight color='#FFF'/>
                            </span>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between items-center cursor-pointer border-b border-gray-400 p-[20px] mt-[30px] ' + (activeTab === 1 ? 'bg-[#363733] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(1)}>
                        <div className='lg:w-[200px] w-auto'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <PenTool size="22" color="#FFF"/>
                            </span>
                        </div>
                        <div className='lg:w-[calc(100%-400px)] w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='lg:text-[140%] text-[90%]'>Fresh From the Farm</h3>
                        </div>
                        <div className='lg:w-[200px] w-auto flex justify-end'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <MoveUpRight color='#FFF'/>
                            </span>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between items-center cursor-pointer border-b border-gray-400 p-[20px] mt-[30px] ' + (activeTab === 2 ? 'bg-[#363733] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(2)}>
                        <div className='lg:w-[200px] w-auto'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <PresentionChart size="22" color="#FFF"/>
                            </span>
                        </div>
                        <div className='lg:w-[calc(100%-400px)] w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='lg:text-[140%] text-[90%]'>Quality Assurance</h3>
                        </div>
                        <div className='lg:w-[200px] w-auto flex justify-end'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <MoveUpRight color='#FFF'/>
                            </span>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between items-center cursor-pointer border-b border-gray-400 p-[20px] mt-[30px] ' + (activeTab === 3 ? 'bg-[#363733] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(3)}>
                        <div className='lg:w-[200px] w-auto'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <Activity size="22" color="#FFF"/>
                            </span>
                        </div>
                        <div className='lg:w-[calc(100%-400px)] w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='lg:text-[140%] text-[90%]'>Farm to Fork Transparency</h3>
                        </div>
                        <div className='lg:w-[200px] w-auto flex justify-end'>
                            <span className='w-[50px] h-[50px] inline-flex items-center justify-center rounded-[50%] bg-[#000]'>
                                <MoveUpRight color='#FFF'/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='basis-[40%] custom-holder lg:pl-[20px] pl-[0] lg:mt-[0] mt-[30px]'>
                    {activeTab === 0 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src="https://img.freepik.com/free-photo/preserved-food-arrangement_23-2149238972.jpg?t=st=1709051050~exp=1709054650~hmac=1f4a492981abb05482af6d556be04c89bce6c3b73a6a8e1df8e7e8338445ffa6&w=740" alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%]'>Diverse Selection</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Explore a wide array of products curated to meet your culinary needs. From pantry staples to gourmet delights, we have it all.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 1 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src="https://img.freepik.com/free-photo/close-up-food-preservation-method_23-2149185666.jpg?t=st=1709051804~exp=1709055404~hmac=974f183e65f4c50d5527a853babaf8060f67ece14afc37242672bb4df1afbb8a&w=740" alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%]'>Fresh From the Farm</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Our commitment to freshness is unparalleled. We source directly from local farms, ensuring that every item you receive is at the peak of its quality.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 2 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src="https://img.freepik.com/free-photo/top-view-food-donation-with-copy-space-box_23-2148733849.jpg?t=st=1709052249~exp=1709055849~hmac=f1fb251ba803ca25a949eb1cfeb3484d8e381b59abee3a8618506f8a18af180c&w=740" alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%]'>Quality Assurance</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Sunflower Pantry is dedicated to providing you with nothing but the best. Our rigorous quality checks guarantee that every product meets the highest standards.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 3 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src="https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?t=st=1709048878~exp=1709052478~hmac=87ed9ef2f596bad345cffcd7822544134558959ff1315ade0ec252038042f8e6&w=740" alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%]'>Farm to Fork Transparency</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Know where your food comes from. We believe in transparency, and our platform allows you to trace the journey of your fresh produce from the farm to your fork.</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
        </>
    );
}