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
import Recipe1 from "../../assets/images/recipe-1.jpg";
import Recipe2 from "../../assets/images/recipe-2.jpg";
import Recipe3 from "../../assets/images/recipe-3.jpg";
import Recipe4 from "../../assets/images/recipe-4.jpg";

export default function Recipes(){
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
            <div className='flex flex-wrap mt-[40px]'>
                <div className='basis-[50%] custom-holder'>
                    <div data-aos="fade-right" data-aos-duration="800" className='mb-[7rem]'>
                        <p className='xui-opacity-6 text-[80%]'>(03)</p>
                        <p className='text-[100%]'>Video Recipe Cards</p>
                    </div>
                    <div className={'w-full flex justify-between items-center border-b cursor-pointer border-gray-400 p-[20px] ' + (activeTab === 0 ? 'bg-[#000000] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(0)}>
                        <div className='w-auto'>
                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9683 7.45098V1.17647C13.9683 0.864451 14.0686 0.565211 14.2472 0.34458C14.4258 0.123949 14.668 0 14.9206 0C15.1732 0 15.4155 0.123949 15.5941 0.34458C15.7727 0.565211 15.873 0.864451 15.873 1.17647V7.45098C15.873 7.763 15.7727 8.06224 15.5941 8.28287C15.4155 8.5035 15.1732 8.62745 14.9206 8.62745C14.668 8.62745 14.4258 8.5035 14.2472 8.28287C14.0686 8.06224 13.9683 7.763 13.9683 7.45098ZM20 8.62745C20.2526 8.62745 20.4948 8.5035 20.6734 8.28287C20.852 8.06224 20.9524 7.763 20.9524 7.45098V1.17647C20.9524 0.864451 20.852 0.565211 20.6734 0.34458C20.4948 0.123949 20.2526 0 20 0C19.7474 0 19.5052 0.123949 19.3266 0.34458C19.148 0.565211 19.0476 0.864451 19.0476 1.17647V7.45098C19.0476 7.763 19.148 8.06224 19.3266 8.28287C19.5052 8.5035 19.7474 8.62745 20 8.62745ZM25.0794 8.62745C25.332 8.62745 25.5742 8.5035 25.7528 8.28287C25.9314 8.06224 26.0317 7.763 26.0317 7.45098V1.17647C26.0317 0.864451 25.9314 0.565211 25.7528 0.34458C25.5742 0.123949 25.332 0 25.0794 0C24.8268 0 24.5845 0.123949 24.4059 0.34458C24.2273 0.565211 24.127 0.864451 24.127 1.17647V7.45098C24.127 7.763 24.2273 8.06224 24.4059 8.28287C24.5845 8.5035 24.8268 8.62745 25.0794 8.62745ZM39.619 17.8039L34.9206 22.1569V34.1176C34.9206 35.6777 34.4189 37.1739 33.5259 38.2771C32.6329 39.3803 31.4217 40 30.1587 40H9.84127C8.57834 40 7.36713 39.3803 6.4741 38.2771C5.58107 37.1739 5.07937 35.6777 5.07937 34.1176V22.1569L0.380956 17.8039C0.178887 17.6167 0.045297 17.338 0.0095758 17.0291C-0.0261454 16.7202 0.0389278 16.4065 0.19048 16.1569C0.342032 15.9072 0.567649 15.7422 0.817698 15.6981C1.06775 15.654 1.32174 15.7344 1.52381 15.9216L5.07937 19.2157V15.2941C5.07937 14.5661 5.31349 13.8678 5.73024 13.353C6.14699 12.8382 6.71222 12.549 7.30159 12.549H32.6984C33.2878 12.549 33.853 12.8382 34.2698 13.353C34.6865 13.8678 34.9206 14.5661 34.9206 15.2941V19.2157L38.4762 15.9216C38.6783 15.7344 38.9323 15.654 39.1823 15.6981C39.4324 15.7422 39.658 15.9072 39.8095 16.1569C39.9611 16.4065 40.0261 16.7202 39.9904 17.0291C39.9547 17.338 39.8211 17.6167 39.619 17.8039ZM33.0159 15.2941C33.0159 15.1901 32.9824 15.0904 32.9229 15.0168C32.8634 14.9433 32.7826 14.902 32.6984 14.902H7.30159C7.21739 14.902 7.13665 14.9433 7.07711 15.0168C7.01758 15.0904 6.98413 15.1901 6.98413 15.2941V34.1176C6.98413 35.0537 7.28515 35.9514 7.82097 36.6133C8.35679 37.2752 9.08351 37.6471 9.84127 37.6471H30.1587C30.9165 37.6471 31.6432 37.2752 32.179 36.6133C32.7149 35.9514 33.0159 35.0537 33.0159 34.1176V15.2941Z" fill={(activeTab === 0 ? '#FFF' : '#000')}/>
                            </svg>
                        </div>
                        <div className=' w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3  className='lg:text-[90%] text-[80%] xui-font-w-500 xui-font-9'>Ingredient Spotlights</h3>
                        </div>
                        <div className=' w-auto flex justify-end'>
                            <span className={'w-[40px] h-[40px] inline-flex items-center justify-center rounded-[50%] ' + (activeTab === 0 ? 'bg-[#FFF]' : 'bg-[#000]')}>
                                <MoveUpRight color={(activeTab === 0 ? '#000' : '#FFF')}/>
                            </span>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between items-center border-b cursor-pointer border-gray-400 p-[20px] ' + (activeTab === 1 ? 'bg-[#000000] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(1)}>
                        <div className='w-auto'>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1697 5.59463C11.9602 3.92122 13.2099 2.50688 14.7733 1.51638C16.3367 0.525883 18.1493 0 20 0C21.8507 0 23.6633 0.525883 25.2267 1.51638C26.7901 2.50688 28.0398 3.92122 28.8303 5.59463C31.2462 5.48754 33.6271 6.2023 35.5846 7.6223C37.5421 9.04231 38.9606 11.0837 39.6087 13.4136C40.2568 15.7434 40.0963 18.2241 39.1533 20.4509C38.2103 22.6778 36.5406 24.5194 34.4164 25.6753V31.2596C34.4164 32.9319 34.4164 34.3251 34.2676 35.4301C34.1113 36.5983 33.7654 37.653 32.9171 38.4994C32.0707 39.3476 31.016 39.6936 29.8478 39.8499C28.7429 39.9987 27.3477 39.9987 25.6773 39.9987H14.3227C12.6523 39.9987 11.2571 39.9987 10.1522 39.8499C8.984 39.6936 7.92928 39.3476 7.08289 38.4994C6.23465 37.653 5.88866 36.5983 5.7324 35.4301C5.58359 34.3251 5.58359 32.9319 5.58359 31.2596V25.6772C3.45943 24.5213 1.78965 22.6797 0.846677 20.4528C-0.096299 18.2259 -0.256821 15.7452 0.3913 13.4154C1.03942 11.0856 2.45793 9.04417 4.41541 7.62416C6.37288 6.20416 8.75379 5.48754 11.1697 5.59463ZM10.3326 8.38676C8.54944 8.46918 6.84662 9.15265 5.5013 10.326C4.15597 11.4993 3.24733 13.0934 2.92324 14.8488C2.59915 16.6042 2.87869 18.4177 3.71637 19.994C4.55406 21.5704 5.90057 22.8168 7.53678 23.5305C7.78547 23.639 7.9971 23.8177 8.14578 24.0447C8.29446 24.2717 8.37372 24.5371 8.37386 24.8085V29.7677H31.6261V24.8085C31.6263 24.5371 31.7055 24.2717 31.8542 24.0447C32.0029 23.8177 32.2145 23.639 32.4632 23.5305C34.0989 22.8161 35.4447 21.5694 36.2819 19.9931C37.1191 18.4168 37.3984 16.6036 37.0744 14.8484C36.7504 13.0932 35.8422 11.4993 34.4973 10.3258C33.1525 9.15228 31.4503 8.46824 29.6674 8.3849C29.7325 8.83693 29.766 9.30011 29.766 9.77074V10.7008C29.766 11.0708 29.619 11.4257 29.3573 11.6873C29.0957 11.949 28.7408 12.096 28.3708 12.096C28.0008 12.096 27.6459 11.949 27.3843 11.6873C27.1227 11.4257 26.9757 11.0708 26.9757 10.7008V9.77074C26.9767 8.8544 26.7969 7.94687 26.4467 7.1001C26.0965 6.25333 25.5827 5.48395 24.9347 4.836C24.2868 4.18805 23.5174 3.67427 22.6706 3.32405C21.8239 2.97384 20.9163 2.79408 20 2.79505C18.1502 2.79604 16.3765 3.53129 15.0685 4.83927C13.7606 6.14725 13.0253 7.92097 13.0243 9.77074V10.7008C13.0243 11.0708 12.8773 11.4257 12.6157 11.6873C12.354 11.949 11.9992 12.096 11.6292 12.096C11.2592 12.096 10.9043 11.949 10.6427 11.6873C10.381 11.4257 10.234 11.0708 10.234 10.7008V9.77074C10.234 9.30011 10.2675 8.83879 10.3326 8.38676ZM31.6224 32.558H8.37758C8.38502 33.6183 8.41106 34.4182 8.49849 35.0599C8.61382 35.9175 8.81286 36.2858 9.05655 36.5276C9.29837 36.7694 9.66483 36.9685 10.5224 37.0857C11.4208 37.2047 12.6262 37.2084 14.4195 37.2084H25.5805C27.3738 37.2084 28.5792 37.2047 29.4776 37.0838C30.3352 36.9685 30.7035 36.7694 30.9453 36.5257C31.1871 36.2839 31.3862 35.9175 31.5034 35.0599C31.5889 34.4163 31.615 33.6164 31.6224 32.558Z" fill={(activeTab === 1 ? '#FFF' : '#000')}/>
                        </svg>

                        </div>
                        <div className=' w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3  className='lg:text-[90%] text-[80%] xui-font-w-500 xui-font-9'>Step-by-Step Instructions</h3>
                        </div>
                        <div className=' w-auto flex justify-end'>
                            <span className={'w-[40px] h-[40px] inline-flex items-center justify-center rounded-[50%] ' + (activeTab === 1 ? 'bg-[#FFF]' : 'bg-[#000]')}>
                                <MoveUpRight color={(activeTab === 1 ? '#000' : '#FFF')}/>
                            </span>
                        </div>
                    </div>

                    <div className={'w-full flex justify-between items-center border-b cursor-pointer border-gray-400 p-[20px] ' + (activeTab === 2 ? 'bg-[#000000] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(2)}>
                        <div className='w-auto'>
                        <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2022 1.55818C16.268 2.36075 16.6149 3.1143 17.1816 3.68599C17.8279 4.33308 18.191 5.2105 18.191 6.12535C18.191 7.0402 17.8279 7.91761 17.1816 8.5647C16.535 9.21184 16.1717 10.0895 16.1717 11.0046C16.1717 11.9197 16.535 12.7974 17.1816 13.4445C17.8279 14.0916 18.191 14.969 18.191 15.8838C18.191 16.7987 17.8279 17.6761 17.1816 18.3232M20.0141 1C19.9449 1.96384 20.2627 2.94932 21 3.68599C21.6463 4.33308 22.0094 5.2105 22.0094 6.12535C22.0094 7.0402 21.6463 7.91761 21 8.5647C20.3534 9.21184 19.9901 10.0895 19.9901 11.0046C19.9901 11.9197 20.3534 12.7974 21 13.4445C21.6463 14.0916 22.0094 14.969 22.0094 15.8838C22.0094 16.7987 21.6463 17.6761 21 18.3232M23.7665 1.17092C23.7542 1.63625 23.8367 2.09922 24.009 2.53162C24.1813 2.96401 24.4397 3.35678 24.7686 3.68599C25.415 4.33308 25.778 5.2105 25.778 6.12535C25.778 7.0402 25.415 7.91761 24.7686 8.5647C24.122 9.21184 23.7587 10.0895 23.7587 11.0046C23.7587 11.9197 24.122 12.7974 24.7686 13.4445C25.415 14.0916 25.778 14.969 25.778 15.8838C25.778 16.7987 25.415 17.6761 24.7686 18.3232M1 13.4921L8.04865 20.9865M1 20.9876C1 32.0398 9.95459 41 21 41C32.0454 41 41 32.0398 41 20.9876H1Z" stroke={(activeTab === 2 ? '#FFF' : '#000')} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </div>
                        <div className=' w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3  className='lg:text-[90%] text-[80%] xui-font-w-500 xui-font-9'>Cooking Tips and Techniques</h3>
                        </div>
                        <div className=' w-auto flex justify-end'>
                            <span className={'w-[40px] h-[40px] inline-flex items-center justify-center rounded-[50%] ' + (activeTab === 2 ? 'bg-[#FFF]' : 'bg-[#000]')}>
                                <MoveUpRight color={(activeTab === 2 ? '#000' : '#FFF')}/>
                            </span>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between items-center border-b cursor-pointer border-gray-400 p-[20px] ' + (activeTab === 3 ? 'bg-[#000000] text-white rounded-[12px]' : 'xui-bg-none')} onClick={() => handleTabClick(3)}>
                        <div className='w-auto'>
                        <svg width="30" height="30" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3685 27.1662C11.4252 27.3688 11.5217 27.5583 11.6526 27.724C11.7834 27.8897 11.9459 28.0284 12.131 28.132C12.316 28.2356 12.5198 28.3022 12.7309 28.3279C12.942 28.3537 13.1561 28.3381 13.361 28.282C13.566 28.226 13.7578 28.1306 13.9255 28.0013C14.0931 27.8721 14.2334 27.7114 14.3382 27.5285C14.4431 27.3457 14.5104 27.1442 14.5365 26.9356C14.5625 26.727 14.5468 26.5154 14.4901 26.3129L11.3685 27.1662ZM2.07299 4.67976C1.86722 4.62036 1.65157 4.60194 1.43854 4.62556C1.22551 4.64918 1.01934 4.71438 0.832009 4.81736C0.644675 4.92035 0.4799 5.05908 0.347244 5.22549C0.214588 5.39191 0.116692 5.58271 0.0592369 5.78681C0.00178184 5.99091 -0.0140889 6.20426 0.0125458 6.41448C0.0391805 6.62469 0.10779 6.82758 0.214394 7.01138C0.320998 7.19518 0.463474 7.35623 0.633554 7.48519C0.803635 7.61414 0.997934 7.70843 1.20518 7.76259L2.07299 4.67976ZM38.7457 28.1476C38.9565 28.0995 39.1554 28.01 39.3307 27.8846C39.5059 27.7591 39.6539 27.6003 39.766 27.4173C39.878 27.2344 39.9519 27.0311 39.9831 26.8195C40.0143 26.6079 40.0023 26.3922 39.9477 26.1853C39.8932 25.9784 39.7972 25.7843 39.6655 25.6147C39.5338 25.445 39.369 25.3032 39.1808 25.1975C38.9927 25.0919 38.7851 25.0246 38.5702 24.9996C38.3553 24.9746 38.1375 24.9924 37.9297 25.052L38.7457 28.1476ZM17.1777 32.0604C17.8469 34.4498 16.379 36.9737 13.7798 37.6414L14.5937 40.7371C18.8615 39.6426 21.4693 35.3992 20.2992 31.207L17.1777 32.0604ZM13.7798 37.6414C11.1635 38.3135 8.53842 36.8115 7.8649 34.4008L4.74336 35.2541C5.90908 39.425 10.3431 41.8294 14.5937 40.7371L13.7798 37.6414ZM7.8649 34.4008C7.19569 32.0113 8.66363 29.4874 11.2628 28.8197L10.4489 25.7262C6.18108 26.8206 3.57116 31.0619 4.74336 35.2541L7.8649 34.4008ZM11.2628 28.8197C13.8791 28.1476 16.5042 29.6496 17.1777 32.0604L20.2992 31.207C19.1335 27.0361 14.6995 24.6317 10.4489 25.724L11.2628 28.8197ZM14.4901 26.3129L9.84446 9.69335L6.72292 10.5467L11.3685 27.1662L14.4901 26.3129ZM5.75149 5.68675L2.07299 4.67976L1.20518 7.76259L4.88583 8.77171L5.75149 5.68675ZM9.84446 9.69335C9.57057 8.73298 9.04957 7.85913 8.33227 7.15696C7.61496 6.45479 6.72581 5.94826 5.75149 5.68675L4.89015 8.77171C5.80762 9.02345 6.48978 9.71255 6.72292 10.5467L9.84446 9.69335ZM19.1486 33.1826L38.7457 28.1476L37.9318 25.052L18.3326 30.0869L19.1486 33.1826Z" fill={(activeTab === 3 ? '#FFF' : '#000')}/>
                        <path d="M15.8131 13.2242C14.7661 9.48001 14.2437 7.60685 15.1331 6.13264C16.0203 4.65629 17.974 4.15493 21.8813 3.15008L26.0261 2.08763C29.9334 1.08491 31.8871 0.581419 33.4262 1.43266C34.9654 2.28604 35.49 4.15707 36.5348 7.90339L37.6466 11.8759C38.6936 15.6201 39.2181 17.4932 38.3287 18.9696C37.4393 20.4438 35.4857 20.9473 31.5784 21.95L27.4336 23.0146C23.5263 24.0173 21.5726 24.5186 20.0334 23.6674C18.4942 22.814 17.9718 20.943 16.9248 17.1988L15.8131 13.2242Z" stroke={(activeTab === 3 ? '#FFF' : '#000')} stroke-width="2"/>
                        </svg>


                        </div>
                        <div className=' w-auto text-center lg:px-[0] px-[1rem]'>
                            <h3  className='lg:text-[90%] text-[80%] xui-font-w-500 xui-font-9'>Foodstuffs Vendors</h3>
                        </div>
                        <div className=' w-auto flex justify-end'>
                            <span className={'w-[40px] h-[40px] inline-flex items-center justify-center rounded-[50%] ' + (activeTab === 3 ? 'bg-[#FFF]' : 'bg-[#000]')}>
                                <MoveUpRight color={(activeTab === 3 ? '#000' : '#FFF')}/>
                            </span>
                        </div>
                    </div>
                    
                </div>
                <div className='basis-[50%] custom-holder lg:pl-[4rem] pl-[0] lg:mt-[0] mt-[30px]'>
                <h1  className='text-[120%] mb-[2rem] xui-font-9'>Dive into a world of mouthwatering recipes presented in engaging video format. From quick weeknight dinners to gourmet delights, our curated collection of video recipe cards offers something for every palate.</h1>
                    {activeTab === 0 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src={Recipe1} alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%] xui-font-9'>Ingredient Spotlights</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Get to know the star ingredients in our recipes with our ingredient spotlights. Learn about the nutritional benefits, flavor profiles, and culinary uses of each ingredient.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 1 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src={Recipe2} alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%] xui-font-9'>Step-by-Step Instructions</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Cooking shouldn't be intimidating. That's why we provide clear step-by-step instructions for each recipe, accompanied by photos or videos to guide you through the cooking process with ease.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 2 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src={Recipe3} alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%] xui-font-9'>Cooking Tips and Techniques</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Cooking shouldn't be intimidating. That's why we provide clear step-by-step instructions for each recipe, accompanied by photos or videos to guide you through the cooking process with ease.</p>
                            </div>
                        </div>
                    }
                    {activeTab === 3 && 
                        <div>
                            <img className='h-[250px] w-full rounded-[12px]' src={Recipe4} alt="" />
                            <div className='pt-[20px]'>
                                <h3 className='text-[120%] xui-font-9'>Foodstuffs Vendors</h3>
                                <p className='text-[80%] xui-opacity-6 xui-line-height-1-half mt-[9px]'>Once you've found the perfect recipe, effortlessly shop for the ingredients you need directly from our trusted foodstuffs vendors. goodbye to multiple grocery store trips and hello to hassle-free shopping!</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
        </>
    );
}