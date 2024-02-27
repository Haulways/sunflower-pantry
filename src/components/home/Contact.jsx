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
import { useForm } from 'react-hook-form';

export default function Contact(){
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const sendRequest = (data) => {
        console.log(data);
          
      }
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <section className='px-[50px] pt-[20px] pb-[170px]'>
            <div className='flex justify-between pr-[50px]'>
                <div data-aos="fade-right" data-aos-duration="800" className='w-[calc(100%-400px)]'>
                    <p className='xui-opacity-6 text-[80%]'>(04)</p>
                    <p className='text-[100%]'>Contact Us</p>
                    <h3 className='text-[105%] lg:w-[70%] w-full text-[200%]'>Let's discuss your vision 
                    <Link to="/" className="inline-flex items-center text-[80%] mx-[.5rem]">
                        <div className="px-[2rem] py-[.5rem] bg-[#fff] rounded-[100px] border border-black">
                            <p className='text-[80%]'>Let's talk</p>
                        </div>
                        <div className="w-[50px] h-[50px] ml-[-5px] flex justify-center items-center py-[1rem] bg-[#000] rounded-[50%]">
                            <MoveUpRight color='#FFF' />
                        </div>
                    </Link> with us.</h3>
                </div>
                <div className='w-[400px]'>
                <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="800" className='text-[170%]'>Your satisfaction and feedback are important to us. Feel free to reach out </h1>
                </div>
            </div>
            <form className="xui-mt-2" noValidate onSubmit={handleSubmit(sendRequest)} autoComplete="off">
                    <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1">
                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Name</label>
                            <input {...register('fullName', {required: true, minLength: 2, maxLength: 18})} type="text" className="portfolio-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90" placeholder="Enter your full name" />
                            {/* {errors.fullName && errors.fullName.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your name</span> : null}
                            {errors.fullName && errors.fullName.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                            {errors.fullName && errors.fullName.type == "maxLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too long</span> : null} */}
                        </div>

                        <div>
                            <label className="xui-form-label xui-font-sz-90 xui-mb-1">Email</label>
                            <input {...register('emailAddress', {required: true, pattern: /^(?!.*@gigi\.codes$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} type="email" className="portfolio-contact-input xui-bdr-rad-half xui-form-input xui-font-sz-90" placeholder="Enter your email address" />
                            {/* {errors.emailAddress && errors.emailAddress.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Please enter your email addres</span> : null}
                            {errors.emailAddress && errors.emailAddress.type == "pattern" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Incorrect email address</span> : null} */}
                        </div>
                    </div>
                    <div className="xui-my-2">
                        <label className="xui-form-label xui-font-sz-90 xui-mb-1">Subject</label>
                        <textarea {...register('subject', {required: true, minLength: 10, maxLength: 200})} className="portfolio-contact-textarea xui-bdr-rad-half xui-form-input xui-font-sz-90" cols="30" rows="10" placeholder="Enter your subject/topic"></textarea>
                        {/* {errors.projectSubject && errors.projectSubject.type == "required" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">Enter your project subject</span> : null}
                        {errors.projectSubject && errors.projectSubject.type == "minLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too short</span> : null}
                        {errors.projectSubject && errors.projectSubject.type == "maxLength" ? <span className="xui-d-inline-block xui-mt-half xui-font-sz-90 xui-text-red">This field is too long</span> : null} */}
                    </div>
                    <div className="xui-my-2">
                        <button className="xui-btn xui-font-w-700 xui-px-3 xui-py-1-half xui-bdr-rad-half bg-[#363733] text-[#FFF]">Send message</button>
                    </div>
                </form>
            
        </section>
        </>
    );
}