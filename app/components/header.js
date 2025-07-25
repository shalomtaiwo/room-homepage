import React from 'react'
import Image from "next/image";
import {Menu} from "lucide-react";

const Header = () => {

    const [open, setOpen] = React.useState(false);
    return (
        <div className={'absolute z-10 top-12 lg:left-10 lg:w-auto w-full'}>
            <div className={'lg:flex hidden items-center justify-center space-x-12'}>
                <div>
                    <Image src={'./room.svg'} alt={'logo'} width={80} height={50} objectFit={'cover'} />
                </div>
                <nav aria-label="menu">
                    <ul className={'flex items-center space-x-10 text-base text-white font-semibold leading-none'}>
                        <li>
                            home
                        </li>
                        <li>
                            shop
                        </li>
                        <li>
                            about
                        </li>
                        <li>
                            contact
                        </li>
                    </ul>
                </nav>

            </div>
            <div className={'lg:hidden '}>
                <div className={'flex items-start justify-between w-full px-6'}>
                    <button className={'slide-enter cursor-pointer'} onClick={() => {
                        setOpen(!open);
                    }}>
                        <Menu color={'white'} />
                    </button>
                    <div>
                        <Image src={'./room.svg'} alt={'logo'} width={80} height={50} objectFit={'contain'} />
                    </div>

                    <div>
                        <p></p>
                    </div>
                </div>
                <div className={`p-6 ${open ? 'slide-enter block' : 'hidden'}`}>
                    <nav aria-label="menu" className={'w-full'}>
                        <ul className={'flex flex-col items-center space-y-6 py-3 text-base text-black font-semibold leading-none bg-white w-full'}>
                            <li>
                                home
                            </li>
                            <li>
                                shop
                            </li>
                            <li>
                                about
                            </li>
                            <li>
                                contact
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
export default Header
