import { AlignLeft, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

export default function Navbar(){
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarColor, setNavbarColor] = useState("bg-[transparent]");
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setNavbarColor("alternative-nav-color");
                
            } else {
                if (location.pathname === '/about') {
                    console.log("Setting navbar color to #000");
                    setNavbarColor("alternative-nav-color");
                } else {
                    console.log("Setting navbar color to transparent");
                    setNavbarColor("bg-[transparent]");
                }
            }
        };

        // Set initial navbar color based on route
        console.log("Current pathname:", location.pathname);
        if (location.pathname === '/about') {
            console.log("Setting navbar color to #000");
            setNavbarColor("alternative-nav-color");
        } else {
            console.log("Setting navbar color to transparent");
            setNavbarColor("bg-[transparent]");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
   
    return(
        <>
        <nav className={`snf-navbar z-20 h-[90px] fixed w-full left-[0] ${navbarColor} lg:px-[50px] px-[20px] flex items-center justify-between`}>
            <div className="w-[100px]">
                <HashLink to="/">
                    <img className="max-w-[70px] mx-auto w-full block" src={Logo} alt="" />
                </HashLink>
            </div>
            <div className={`nav-links px-[2.5rem] py-[1rem] bg-[var(--glass-bg)] rounded-[100px] nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <HashLink className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" onClick={handleMobileMenuToggle} smooth to="#home">Home</HashLink>
                <HashLink className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" onClick={handleMobileMenuToggle} smooth to="#about">About us</HashLink>
                <HashLink className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" onClick={handleMobileMenuToggle} to="#social-categories">Social categories</HashLink>
                <HashLink className="inline-block py-[0.3rem] px-[0.6rem] text-[#fff] no-underline my-[0] mx-[15px] lg:text-[95%] text-[120%] font-medium" onClick={handleMobileMenuToggle} to="#contact">Contact</HashLink>
            </div>
            <HashLink smooth to='#about' className="lg:flex hidden items-center">
                <div className="px-[2.5rem] py-[1rem] bg-[#fff] get-started rounded-[100px]">
                    <p>Get started</p>
                </div>
                <div className="w-[50px] h-[50px] get-started-circle ml-[-5px] flex justify-center items-center py-[1rem] bg-[#fff] rounded-[50%]">
                    <MoveUpRight />
                </div>
            </HashLink>
            <div className="lg:hidden block menu-btn" onClick={handleMobileMenuToggle}>
                <AlignLeft color="#FFF" size="30px" />
            </div>
        </nav>
        </>
    );
}