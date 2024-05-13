
const HeroSection = () => {
    return (
        <div>
            <div className="flex w-10/12 m-auto">
                <div className="w-3/6 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold">Everything for your car</h1>
                    <p className="text-lg pt-8 font-medium">Begin your car journey with ParkSpotter and say goodbye to all your car-related worries - one service at a time</p>
                </div>
                <div className=" w-3/6">
                    <img className="h-48 w-full object-cover md:h-full md:w-full" src="./image_4_a7c45621d6.png" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;