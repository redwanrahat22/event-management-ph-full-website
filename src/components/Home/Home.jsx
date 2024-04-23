
import AboutUS from "./AboutUS";
import Carousel from "./Carousel";
import Section2 from "./Section2";
import Services from "./Services";


const Home = () => {
    

    
    return (

        <div >
            <div className="mt-12" data-aos="fade-up" >
            <Carousel></Carousel>
            </div>
            <div className="mt-10 md:mt-44" data-aos="fade-up" >
                <AboutUS></AboutUS>
            </div>

        <div className="md:mt-32 mt-10">
            <Section2></Section2>
        </div>
            <div className="md:mt-44  mt-16">
                <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;