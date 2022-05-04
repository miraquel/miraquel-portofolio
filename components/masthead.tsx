import React, { useRef, useContext, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import NamePlate from "./nameplate";
import { FaChevronUp } from "react-icons/fa";
import { ScrollContext } from "../utils/scroll-observer";
import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion";

interface IMastHead {
    className?: string
}

const Masthead: React.FC<IMastHead> = (props) => {
    const { scrollY } = useContext(ScrollContext);
    const ref = useRef<HTMLDivElement>(null);
    const [innerHeight, setInnerHeight] = useState(0);
    
    let transformY = useTransform(scrollY, [0, innerHeight], [0, innerHeight * 0.75]);

    useEffect(() => {
        setInnerHeight(window.innerHeight)
    }, [])
    
    
    return (
        <motion.div ref={ref} style={{ y: transformY, zIndex: -10 }} className={`${props.className}`}>
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/assets/PurpleGrid.mp4" type="video/mp4; codecs=hvc1" />
                <source src="/assets/PurpleGrid.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className="min-h-android grid grid-rows-3 justify-items-center">
                <div>
                    
                </div>
                <div className="group -mt-24">
                    <NamePlate className="absolute blur-2xl bg-gradient-to-r from-yellow-500 to-purple-500 opacity-0 group-hover:opacity-75 group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]" />
                    <NamePlate className="relative" />
                </div>
                <div className="inline-block align-text-bottom items-end text-white text-4xl pt-20">
                    {/* <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.8s"}}  /> */}
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.6s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.4s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0.2s"}}  />
                    <FaChevronUp className="animate-fade-out -my-3" style={{animationDelay:"0s"}}  />
                    {/* <FaChevronUp className="animate-fade-up -mt-12" style={{animationDelay:"3s"}}  /> */}
                </div>
            </div>
        </motion.div>
    )
}

export default Masthead