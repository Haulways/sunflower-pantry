import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Varieties(){
    const [activeIndex, setActiveIndex] = useState(0);
    const CustomPagination = ({ slideCount, onBulletClick }) => {
        const texts = ['Grains and Cereals', 'Spices and Condiments', 'Fresh Produce', 'Dairy Products', 'Baked Goods', 'Vegetables'];
    
        const bullets = Array.from({ length: slideCount }).map((_, index) => (
          <p
            key={index}
            className={`custom-bullet ${activeIndex === index ? 'active-bullet' : ''}`}
            onClick={() => onBulletClick(index)}
          >
            {texts[index]}
          </p>
        ));
    
        return <div className="custom-pagination text-left xui-d-flex xui-flex-dir-column xui-flex-jc-center">{bullets}</div>;
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
            slidesPerView: 2,
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
        <section className='lg:px-[50px] px-[20px] pt-[50px] lg:pb-[170px] pb-[60px]'>
            <div className='bg-[#363733] text-white px-[20px] py-[50px] rounded-[12px]'>
                <div className='flex flex-wrap justify-between pr-[50px]'>
                    <div data-aos="fade-right" data-aos-duration="800" className='lg:w-[calc(100%-200px)] w-full'>
                        <p className='xui-opacity-6 text-[80%]'>(02)</p>
                        <p className='text-[100%]'>Our Varieties</p>
                        <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[170%]'>Explore a Variety of Choices</h1>
                    </div>
                    <div className='lg:w-[200px] w-full lg:mt-[0] mt-[30px]'>
                        <CustomPagination slideCount={7} activeIndex={0} onBulletClick={(index) => console.log(index)} />
                    </div>
                </div>
                <div className='flex flex-wrap py-[35px] items-flex-end'>
                    <div data-aos="fade-right" data-aos-duration="800" className='basis-[20%] custom-holder'>
                        <h3 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[120%]'>Our Product Categories</h3>
                        <p className='text-[100%] lg:inline-block hidden'>Our Varieties</p>
                    </div>
                    <div className='basis-[80%] xui-overflow-x-hidden custom-holder lg:mt-[0] mt-[30px]'>
                    <Swiper
                        modules={[Autoplay]}
                        direction="horizontal"
                        speed={200}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={true}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        // breakpoints={breakpoints}
                        className="varieties-swiper"
                    >
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?t=st=1709048878~exp=1709052478~hmac=87ed9ef2f596bad345cffcd7822544134558959ff1315ade0ec252038042f8e6&w=740)`}}>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/food-donations-collected-charity_23-2149230586.jpg?t=st=1709048916~exp=1709052516~hmac=06dc191e47aa86486590478572bd4bb3c6478950a86981d5cf1b9a126f83412c&w=740)`}}>
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/top-view-box-with-food-donation_23-2148733844.jpg?t=st=1709048942~exp=1709052542~hmac=09208f66c224b9215254a81f4eb48511de0630df66e3d9356ec8b9c0fa64dcde&w=740)`}}>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?t=st=1709048878~exp=1709052478~hmac=87ed9ef2f596bad345cffcd7822544134558959ff1315ade0ec252038042f8e6&w=740)`}}>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/food-donations-collected-charity_23-2149230586.jpg?t=st=1709048916~exp=1709052516~hmac=06dc191e47aa86486590478572bd4bb3c6478950a86981d5cf1b9a126f83412c&w=740)`}}>
                               
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-cover bg-center flex w-full h-full rounded-[12px] pt-[180px] pl-[50px]  pb-[300px]"
                             style={{backgroundImage: `url(https://img.freepik.com/free-photo/top-view-box-with-food-donation_23-2148733844.jpg?t=st=1709048942~exp=1709052542~hmac=09208f66c224b9215254a81f4eb48511de0630df66e3d9356ec8b9c0fa64dcde&w=740)`}}>
                                
                            </div>
                        </SwiperSlide>
                       
                        
                    </Swiper>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}