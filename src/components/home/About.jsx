import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About(){
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <section className='px-[50px] pt-[80px] pb-[170px]'>
            <div className='flex'>
                <div data-aos="fade-right" data-aos-duration="800" className='basis-[50%]'>
                    <p className='xui-opacity-6 text-[80%]'>(01)</p>
                    <p className='text-[100%]'>About us</p>
                    <h3 className='xui-opacity-6 text-[105%] lg:w-[70%] w-full mt-[8rem]'>Our mission is to provide you with the best, whether you're looking for pantry staples or unique finds.</h3>
                </div>
                <div className='basis-[50%]'>
                    <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[170%]'>We take pride in offering a diverse range of products, carefully curated to meet your needs. Explore our aisles filled with the finest wheat, rice, pumpkins, vibrant vegetables, and luscious fruits.</h1>
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
        </section>
        </>
    );
}