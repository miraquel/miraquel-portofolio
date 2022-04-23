import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import NamePlate from "./nameplate";
import { FaChevronDown } from "react-icons/fa";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC<{className?: string}> = ({className}) => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer
    
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    return (
        <div ref={refContainer} className={`${className} min-h-screen inset-0 flex flex-col items-center justify-center sticky top-0 ${progress != 0 && "-z-10"}`}
            style={{transform: `translateY(-${progress * 20}vh)`}}>
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/assets/PurpleGrid.mp4" type="video/mp4; codecs=hvc1" />
                <source src="/assets/PurpleGrid.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className="min-h-screen grid grid-rows-3 grid-flow-col justify-items-center">
                <div>
                    
                </div>
                <div className="group -mt-20">
                    <NamePlate className="absolute blur-2xl bg-gradient-to-r from-yellow-500 to-purple-500 opacity-0 group-hover:opacity-75 group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]" />
                    <NamePlate className="relative" />
                </div>
                <div className="flex flex-grow-0 pb-10 items-end z-10 text-white text-5xl">
                    <FaChevronDown className="hover:animate-fade-down cursor-pointer" style={{animationDelay: '2'}} />
                </div>
            </div>
        </div>
    )
}

export default Masthead