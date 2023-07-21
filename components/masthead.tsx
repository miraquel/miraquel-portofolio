import React, { useRef, useContext, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import NamePlate from "./nameplate";
import { FaChevronUp } from "react-icons/fa";
import { ScrollContext } from "../utils/scroll-observer";

interface IMastHead {
    className?: string
}

const Masthead: React.FC<IMastHead> = (props) => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext)
    const [innerHeight, setInnerHeight] = useState(0);
    
    let progress = 0
    let freeze = false

    const { current: elContainer } = refContainer
    
    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }
    
    return (
        <div ref={refContainer} className={`${props.className} min-h-android flex flex-col items-center justify-center sticky top-0 ${progress < 1 ? "sticky top-0" : ""}`}
            style={{transform: `translateY(-${progress * 20}vh)`}}>
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/assets/PurpleGrid.mp4" type="video/mp4; codecs=hvc1" />
                <source src="/assets/PurpleGrid.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className="min-h-android grid grid-rows-3 justify-items-center">
                <div>
                    
                </div>
                <div className="group -mt-24">
                    {/* <NamePlate className="absolute blur-2xl bg-gradient-to-r from-yellow-500 to-purple-500 opacity-0 group-hover:opacity-75 group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]" /> */}
                    <NamePlate className="relative" />
                    <SocialLinks className="md:px-5 px-3 hover:scale-[135%] duration-[.25] transition-all" />
                </div>
                <div className="inline-block align-text-bottom items-end text-white text-4xl pt-20">
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.6s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.4s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.2s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0s"}}  />
                </div>
            </div>
        </div>
    )
}

export default Masthead