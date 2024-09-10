import Image from "next/image";
import { TiLocationArrow } from "react-icons/ti";

const Destination = () => {
    interface Destination {
        img: string;
        location: string;
        amount: string;
        days: string;
        sideImg: string;
    }

    const destination: Destination[] = [
        {
            img: "/img/golden-temp.jpg",
            location: "Amritsar",
            amount: "Golden Temple",
            days: "10 Days",
            sideImg: ""
        },
        {
            img: "/img/kedarnath.jpg",
            location: "Uttarakhand",
            amount: "Kedarnath Temple",
            days: "12 Days",
            sideImg: ""
        },
        {
            img: "/img/download.jpeg",
            location: "Uttarakhand",
            amount: "Badrinath Temmple",
            days: "28 Days",
            sideImg: "/img/Decore2.png"
        },
    ]
    return (
        <main className="relative w-full py-[80px] px-[5%] grid grid-cols-1 gap-6" id="destination">
            <section className="flex flex-col items-center text-center gap-4">
                <p className="text-[18px] text-litegrey font-bold special-font" data-aos="fade-down">Featured</p>
                <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-down">Top Destinations</h1>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font">
                {destination.map((destinations, index) => 
                <div className="relative flex flex-col rounded-2xl shadow-sm" key={index}>
                    <div className="relative z-10" data-aos="fade-down">
                        <div className="h-[350px]">
                            <Image src={destinations.img} width={300} height={300} alt="img" className="w-full h-full rounded-tl-2xl rounded-tr-2xl" />
                        </div>
                        <div className="grid grid-cols-1 gap-2 p-4">
                            <div className="text-[18px] text-litegrey font-medium flex items-center justify-between gap-4">
                                <p>{destinations.location}</p> <p>{destinations.amount}</p>
                            </div>
                            <div className="text-[16px] text-litegrey font-medium flex items-center gap-1">
                                <TiLocationArrow className="text-litedark text-xl" /> <p>{destinations.days}</p>
                            </div>
                        </div>
                    </div>

                    {destinations.sideImg && <Image src={destinations.sideImg} width={80} height={80} alt="img" className="absolute right-[-15px] sm:right-[-30px] lg:right-[-50px] bottom-[90px]"/>}
                </div>
                )}
            </section>
        </main>
    );
}

export default Destination;