'use client';
import Image from "next/image";
import {ChevronLeft, ChevronRight, MoveRight} from "lucide-react";
import {useState} from "react";
import Header from "@/app/components/header";

export default function Home() {
    const [sliderNo, setSliderNo] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const sliderSwitch = (()=>{
        switch (sliderNo) {
            case 1:
                return (<Image src={'/slide2.png'} alt={'furn.png'} fill={true} objectFit={'cover'} />)
            case 2:
                return (<Image src={'/slide3.png'} alt={'furn.png'} fill={true} objectFit={'cover'} />)
            default:
                return (<Image src={'/slide1.png'} alt={'furn.png'} fill={true} objectFit={'cover'} />)
        }
    })

    const prevSlider = (()=>{
        setIsAnimating(true);
        setTimeout(()=>{
            if (sliderNo === 0){
                setSliderNo(2);
            } else if (sliderNo === 1){
                setSliderNo(0);
            } else if (sliderNo === 2){
                setSliderNo(1);
            }
            setIsAnimating(false);
        }, 500)
    })

    const nextSlider = (()=>{
        setIsAnimating(true);
        setTimeout(()=>{
            if (sliderNo === 2){
                setSliderNo(0);
            } else {
                setSliderNo(sliderNo + 1);
            }
            setIsAnimating(false);
        }, 500)

    })

  return (
    <div className="overflow-x-hidden w-full h-full flex flex-col items-center justify-center bg-white relative">
      <div className={'flex lg:flex-row flex-col lg:h-[67.5vh] md:h-[130vh] h-screen w-full'}>
        <div className={'relative lg:w-[60%] w-full h-full'}>
            <Header />
            <div className={`${isAnimating ? 'slide-exit' : 'slide-enter'}`}>
                {sliderSwitch()}
            </div>
            <div className={'lg:hidden flex content-center items-center space-0 mt-6 absolute bottom-0 right-0'}>
                <button className={'bg-black p-6 cursor-pointer hover:bg-gray-700'} onClick={prevSlider}>
                    <ChevronLeft color={'white'} size={'26px'} />
                </button>
                <button className={'bg-black p-6 cursor-pointer hover:bg-gray-700'} onClick={nextSlider}>
                    <ChevronRight color={'white'} size={'26px'} />
                </button>
            </div>
        </div>
        <div className={'relative lg:w-[40%] w-full h-full'}>
            <div className={'bg-white pt-0 lg:px-12 px-10 flex flex-col content-center justify-center space-y-5 h-full'}>
                <h2 className={'font-semibold md:text-5xl text-4xl text-black md:leading-10 leading-8'}>Discover innovative ways to decorate</h2>
                <p className={'text-base leading-snug text-gray-500 font-medium'}>
                    We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                </p>
                <div className={'flex content-center items-center space-x-4 mt-3'}>
                    <p className={'text-base font-medium leading-none tracking-[12.50px]'}>SHOP NOW</p>
                    <MoveRight />
                </div>
            </div>
            <div className={'lg:flex hidden content-center items-center space-0 mt-6 absolute bottom-0'}>
                <button className={'bg-black p-6 cursor-pointer hover:bg-gray-700'} onClick={prevSlider}>
                    <ChevronLeft color={'white'} size={'26px'} />
                </button>
                <button className={'bg-black p-6 cursor-pointer hover:bg-gray-700'} onClick={nextSlider}>
                    <ChevronRight color={'white'} size={'26px'} />
                </button>
            </div>
        </div>
      </div>
      <div className={'lg:inline-flex md:flex-row flex-col justify-center items-center overflow-hidden'}>
        <div className={'h-74 relative overflow-hidden lg:w-[25%] w-full'}>
            <Image src={'/furn.png'} alt={'furn.png'} fill={true} objectFit={'cover'} />
        </div>
        <div className={'bg-white lg:w-[42%] w-full lg:h-74 h-full relative overflow-hidden lg:py-4 py-16 lg:px-12 md:px-16 px-10 flex flex-col content-center justify-center'}>
                <h3 className={'font-bold text-base leading-snug text-black tracking-[7px] mb-4'}>ABOUT OUR FURNITURE</h3>
                <p className={'text-base leading-snug text-gray-500 font-medium'}>
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
        </div>
        <div className={'h-74 relative overflow-hidden lg:w-[33%] w-full'}>
            <Image src={'/chair.png'} alt={'furn.png'} fill={true} objectFit={'cover'} />
        </div>
      </div>

    </div>
  );
}
