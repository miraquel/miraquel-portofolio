import React, { useRef, useEffect, useCallback, ReducerAction } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
    motion,
    motionValue,
    MotionValue,
    useMotionValue,
    useTransform,
    transform
} from 'framer-motion';
import { useContext } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import { useReducer } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

interface ISkillList {
    name: string,
    stars: number
}

const Skillset : ISkillList[] = [
    {
        name: "C#",
        stars: 4
    },
    {
        name: "PHP",
        stars: 3
    },
    {
        name: "JavaScript",
        stars: 4
    },
    {
        name: "TypeScript",
        stars: 3
    },
    {
        name: "X++",
        stars: 5
    },
    {
        name: "T-SQL",
        stars: 4
    },
    {
        name: "CSS",
        stars: 4
    }
]

interface ISkill {
    className?: string,
    posY?: MotionValue<number>
}

const Skills : React.FC<ISkill> = (props) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    const { scrollY } = useContext(ScrollContext)
    const elementRef = useRef<HTMLElement>();
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
        console.log(top, height);
        console.log(window.innerHeight)
    }, [])

    const setRefs = useCallback((node: HTMLElement) => {
        elementRef.current = node;
        ref1(node);
    }, [ref1]);

    const skillList = Skillset.map((prop, index) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div key={i} 
                    style={{
                        //transitionDuration:`0.5s`,
                        animationDelay:`${((index + 1) * 0.2) + (i * 0.1)}s`,
                        transform: `scale(0)`
                    }} 
                    className={`${inView1 ? "animate-pop" : ""} px-2 relative w-1/5 pb-12 ${i > prop.stars ? "grayscale" : ""}`}>
                    <Image src={"/assets/star.svg"} layout={"fill"} objectFit={"contain"} alt="star" />
                </div>
            );
        }
        return (
            <div key={index} className="transition-all flex flex-row items-center place-content-end py-3 px-6 md:px-10 lg:px-24"
                style={{opacity:inView1 ? 1 : 0, transitionDuration:`1s`, transitionDelay:`${(index + 1) * 0.2}s`}}
                >
                <p className="w-1/3 text-sm md:text-lg lg:text-xl">{prop.name}</p>
                <div className="w-2/3 pl-6 flex flex-row">
                    {stars}
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            <motion.div ref={dividerRef} style={{ y: transformY, z: 3 }}>
                <Image src={`/assets/waves-2.svg`} width={960} height={200} layout={'responsive'} />
            </motion.div>
            <motion.section ref={setRefs} style={{ y: transformY, z: 3 }} className={`${props.className}`}>
                <div className="min-h-screen mx-5 md:mx-12 lg:mx-14 xl:mx-32">
                    <div className="transition-all bg-white py-8 md:py-12 lg:py-16 xl:py-20 rounded-xl" style={{transitionDuration:`.8s`, opacity:inView1 ? 1 : 0}}>
                        <h2 className="text-center tracking-widest text-2xl md:text-3xl lg:text-4xl">
                            Skills
                        </h2>
                        <div className="md:pt-8 lg:pt-10 xl:pt-12">
                            {skillList}
                        </div>
                    </div>
                </div>
            </motion.section>
        </React.Fragment>
    )
}

export default Skills;