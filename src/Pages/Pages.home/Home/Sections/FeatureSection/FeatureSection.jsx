
const FeatureSection = () => {
    return (
        <div>
            <div className="w-10/12 m-auto py-16">
                <h1 className="text-4xl font-bold text-center">More reasons than one to love ParkSpotter</h1>
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-24 w-24 my-12" src="./Group_33680_d728cbaf93.webp" alt="..." />
                        <p className="text-center font-medium">One fastag for all your needs - Parking, Tolls, Malls, Fuel payment</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-24 w-24 my-12" src="./Group_3_6c7e04abbc.webp" alt="..." />
                        <p className="text-center font-medium">Save time, fuel and effort with smart parking</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-24 w-24 my-12" src="./Group_7_59de4a0585.webp" alt="..." />
                        <p className="text-center font-medium">Reminders to never miss out on your insurance and PUCC renewal</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="h-24 w-24 my-12" src="./Group_9_3dfabe529a.webp" alt="..." />
                        <p className="text-center font-medium">Easy to find information regarding RTO services, traffic rules etc</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;