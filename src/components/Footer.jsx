import Socials from "../assets/images/socials.png";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { MoveUpRight } from 'lucide-react';
import { Forward, Send } from 'iconsax-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HashLink } from "react-router-hash-link";

export default function Footer(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
      }
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <section id='contact' className='lg:px-[50px] px-[20px] pt-[20px] mt-[2rem] lg:pb-[20px] pb-[20px]'>
            <div className='p-[2rem] bg-[#F9F9F9] rounded-[1rem]'>
            <div className='xui-row py-[1rem]' style={{"borderBottom": "3px solid #000"}}>
                <div data-aos="fade-right" data-aos-duration="800" className='xui-lg-col-8 xui-col-12'>
                    <p className='xui-opacity-6 text-[80%]'>(05)</p>
                    <p className='text-[100%]'>Contact Us</p>
                    <h3 className='text-[215%] lg:w-[70%] w-full'><span className='xui-opacity-6'>Let's</span> <span className='xui-font-w-bold opacity-100'>discuss</span> <span className='xui-opacity-6'>your vision</span>
                    <span className="inline-flex items-center text-[80%] mx-[.5rem]">
                        <div className="px-[1rem] py-[.5rem] bg-[none] rounded-[100px] border border-black">
                            <p className='text-[70%]'>Let's talk</p>
                        </div>
                        <div className="w-[50px] h-[50px] ml-[6px] flex justify-center items-center py-[1rem] bg-[#000] rounded-[50%]">
                            <MoveUpRight color='#FFF' />
                        </div>
                    </span> <span className='xui-font-w-bold opacity-100'>with us.</span></h3>
                </div>
                <div className='xui-lg-col-4 xui-col-12 lg:mt-[0] mt-[30px]'>
                    <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[120%] xui-font-9'>Your satisfaction and feedback are important to us. Feel free to reach out</h1>
                    <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                        <p className='text-[80%]'>Subscribe</p>
                        <div className="flex items-center text-[80%] mt-[.5rem] pr-[12px]">
                            <div className='pr-[1rem] w-[calc(100%-50px)]'>
                                <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="rounded-[10rem] bg-[#000] text-[#FFF] contact-input xui-form-input xui-font-sz-90" placeholder="Enter your email address" />
                            </div>
                            <button className="w-[50px] h-[50px] flex justify-center items-center py-[1rem] bg-[#000] rounded-[50%]">
                                <Send color='#FFF' />
                            </button>
                        </div>
                        {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                        {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null}
                        
                    </form>
                </div>
            </div>
            <div className="py-[1rem] xui-row xui-flex-ai-flex-start">
                <div className="xui-lg-col-4 xui-col-12">
                    <p className='text-[90%] font-medium'>Follow us</p>
                    <img className="mt-[1rem]" src={Socials} alt="" />
                </div>
                <div className="xui-lg-col-8 xui-col-12 flex items-center justify-between xui-grid-gap-1 lg:flex-row flex-col lg:mt-[0] mt-[1rem]">
                    <HashLink className='lg:text-[90%] text-[80%] font-medium' smooth to='#about'>Contact us</HashLink>
                    <HashLink className='lg:text-[90%] text-[80%] font-medium' smooth to='#about'>About us</HashLink>
                    <Link className='lg:text-[90%] text-[80%] font-medium' to='/privacy-policy'>Privacy policy</Link>
                    <HashLink className='lg:text-[90%] text-[80%] font-medium' smooth to='#faqs'>FAQs</HashLink>
                    <HashLink className='lg:text-[90%] text-[80%] font-bold'>&copy; 2020 Powered by Grascope</HashLink>
                </div>
            </div>
            </div>
            

            
            
        </section>
        </>
    );
}