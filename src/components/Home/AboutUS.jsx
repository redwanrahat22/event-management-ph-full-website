

const AboutUS = () => {
    return (
        <div className="flex text-center ">
            <div className="w-2/4">
                <img className="m-auto" src="https://i.ibb.co/jVG8hm3/aboutus-cropped.png" alt="" />
            </div>
            <div className="text-center w-2/4 ">
                <h1 className="md:mt-44 mt-12  font-poppins  md:text-7xl text-common font-bold">About Us</h1>
                <h3 className=" md:mt-20 mt-2 leading-relaxed text-black font-semibold font-poppins text-[4px] md:text-xl">At <span className="text-common">Starlight Events,</span>  we specialize in crafting exceptional 
                    events tailored to your needs. From workshops to career fairs, our dedicated team ensures seamless execution with efficient logistics management, 
                    professional vendor coordination, and comprehensive event planning. With a focus on client communication and post-event analysis, we transform 
                    your vision into unforgettable experiences.</h3>
            </div>
        </div>
    );
};

export default AboutUS;