import { AlignLeft, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const snfNavbar = document.querySelector(".snf-navbar");
        window.addEventListener("scroll", function(){
            if(window.scrollY >= 50){
                snfNavbar.style.backgroundColor = "#000";
            } else {
                snfNavbar.style.backgroundColor = "transparent";
            }
        });
    });
    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
   
    return(
        <>
        <nav className={'snf-navbar z-20 h-[90px] fixed w-full left-[0] bg-transparent lg:px-[50px] px-[20px] flex items-center justify-between'}>
            <div className="w-[100px]">
                <Link to="/">
                    <img className="max-w-[100px] w-full block" src={Logo} alt="" />
                </Link>
            </div>
            <div className={`px-[2.5rem] py-[1rem] bg-[var(--glass-bg)] rounded-[100px] nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" to="/">Home</Link>
                <Link className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" to="/">About</Link>
                <Link className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" to="/">Why choose us</Link>
                <Link className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" to="/">Contact</Link>
            </div>
            <div className="lg:flex hidden items-center">
                <div className="px-[2.5rem] py-[1rem] bg-[#fff] rounded-[100px]">
                    <p>Get started</p>
                </div>
                <div className="w-[50px] h-[50px] ml-[-5px] flex justify-center items-center py-[1rem] bg-[#fff] rounded-[50%]">
                    <MoveUpRight />
                </div>
            </div>
            <div className="lg:hidden block" onClick={handleMobileMenuToggle}>
                <AlignLeft color="#FFF" size="30px" />
            </div>
        </nav>
        </>
    );
}