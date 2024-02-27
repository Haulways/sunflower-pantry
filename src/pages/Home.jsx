import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Header from "../components/home/Header";
import Varieties from "../components/home/Varieties";
import Whyus from "../components/home/Whyus";

export default function Home(){
    return(
        <>
        <Header />
        <About />
        <Varieties />
        <Whyus />
        <Contact />
        </>
    );
}