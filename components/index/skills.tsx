import React, { useRef, useEffect, useCallback, ReducerAction } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ScrollContext } from "../../app/ScrollProvider";
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
    className?: string
}

export const Skills : React.FC<ISkill> = (props) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    const [ref2, inView2, entry2] = useInView({
        /* Optional options */
        threshold: 0
    });

    const { scrollY } = useContext(ScrollContext)
    const elementRef = useRef<HTMLElement>();
    const dividerRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const element = elementRef.current;
    //     const divider = dividerRef.current;
    //     if (element && divider) {
    //         setHeight(element.offsetTop + element.offsetHeight + divider.offsetHeight)
    //         setTop((element.offsetTop + element.offsetHeight) - window.innerHeight)
    //         setInnerHeight(window.innerHeight + divider.offsetHeight)
    //     }
    // }, [])

    const setRefs = useCallback((node: HTMLElement) => {
        elementRef.current = node;
        ref1(node);
        ref2(node);
    }, [ref1, ref2]);

    const { current: elContainer } = elementRef

    const [innerTop, setInnerTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [offsetTop, setOffsetTop] = useState(0);
    const [init, setInit] = useState(false);
    let progress = 0
    
    if (elContainer) {
        if (init === false) {
            setInnerTop((elContainer.scrollHeight - window.visualViewport.height) * -1)
            setScrollHeight(elContainer.scrollHeight)
            setOffsetTop(elContainer.offsetTop)
            setInit(true)
        }

        if (inView2) {
            progress = Math.min(1.2, Math.max(0, (scrollY - offsetTop - 200) / scrollHeight))
        }
    }

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
                    <Image
                        src={"/assets/star.svg"}
                        //layout={"fill"}
                        fill
                        //objectFit={"contain"}
                        alt="star"
                        style={{
                            maxWidth: "100%",
                            objectFit: "contain"
                        }} />
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
            <div ref={dividerRef}>
                <Image
                    src={`/assets/waves-2.svg`}
                    width={960}
                    height={200}
                    layout={'responsive'}
                    alt={"waves"}
                    style={{
                        maxWidth: "100%"
                    }} />
            </div>
            <section ref={setRefs} className={`${props.className} ${progress >= 0 && progress < 1.2 ? "sticky -z-10" : ""}`} style={{ top: innerTop }}>
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
            </section>
        </React.Fragment>
    );
}