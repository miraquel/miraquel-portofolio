import React, { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../utils/scroll-observer";
import { motion, useTransform } from "framer-motion";

const Employment: React.FC<{className?: string}> = ({className}) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    const { scrollY } = useContext(ScrollContext)
    const elementRef = useRef<HTMLElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);

    let transformY = useTransform(scrollY, [top, height], [0, innerHeight]);

    useEffect(() => {
        const element = elementRef.current;
        const divider = dividerRef.current;
        if (element && divider) {
            setHeight(element.offsetTop + element.offsetHeight + divider.offsetHeight)
            setTop((element.offsetTop + element.offsetHeight) - window.innerHeight)
            setInnerHeight(window.innerHeight + divider.offsetHeight)
        }
    }, [])

    return (
        <React.Fragment>
            <motion.div ref={dividerRef} style={{ y: transformY, z: 4 }}>
                <Image src={`/assets/waves-3.svg`} width={960} height={200} layout={'responsive'} alt={"waves"} />
            </motion.div>
            <motion.section ref={elementRef} style={{ y: transformY, z: 4 }} className={`${className}`}>
                <div className="min-h-screen mx-5 md:mx-12 lg:mx-14 xl:mx-32">
                    <div ref={ref1} className="min-h-screen transition-all bg-white py-8 md:py-12 lg:py-16 xl:py-20 rounded-xl" style={{transitionDuration:`.8s`, opacity:inView1 ? 1 : 0}}>
                        <h2 className="text-center tracking-tight text-2xl md:text-3xl lg:text-4xl">
                            Employment History
                        </h2>
                        <div className="md:pt-8 lg:pt-10 xl:pt-12">
                            <div className="text-center">
                                <p>ToDo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </React.Fragment>
    )
}

export default Employment;