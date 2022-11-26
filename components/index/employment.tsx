import React, { useContext, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../../utils/scroll-observer";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Employment: React.FC<{className?: string}> = ({className}) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    const { scrollY } = useContext(ScrollContext)
    const elementRef = useRef<HTMLElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    interface IHistory {
        name: string,
        date: string,
        position: string,
        jobDescription: string,
        image?: string
    }

    const histories : IHistory[]  = [
        // {
        //     name: "PT. Multi Sarisentosa",
        //     date: "January 2013",
        //     position: "Administration Staff",
        //     jobDescription: "Handles paperwork for project tender and ensure the required documents are fulfiled"
        // },
        {
            name: "PT. Visionet Data Internasional",
            date: "January 2018 - February 2019",
            position: "Software Developer",
            jobDescription: "Microsoft Dynamics AX 2012 R3 Developer, responsible for creating and maintaining custom code based from the business requirements",
            image: "visionet.svg"
        },
        {
            name: "PT. Intikom Berlian Mustika",
            date: "February 2019 - Current",
            position: "Software Developer",
            jobDescription: "Microsoft Dynamics Ecosystem Developer, responsible for Developing a solution based from business requirements that depends on multiple Microsoft Dynamics Products, including PowerApps, Power Automate, Dynamics Finance and Operations, Dynamics Business Central, Azure DevOps, Microsoft LCS",
            image: "intikom.png"
        }
    ]

    const Page = (props: { history: IHistory, index: number }) => (
        <React.Fragment>
            <ParallaxLayer className="flex flex-col" offset={props.index}>
                <div className="h-full w-full md:w-4/6 lg:w-3/6 p-5 md:pt-10 md:pl-20 top-0 left-0">
                    <div style={{ transitionDuration: "0.5s" }} className="transition-all p-8 drop-shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 rounded-xl">
                        <time className="text-sm md:text-base text-slate-500">{props.history.date}</time>
                        <h2 className="text-lg md:text-3xl">{props.history.name}</h2>
                        <p className="mt-10 text-slate-700 leading-relaxed tracking-tight">{props.history.jobDescription}</p>
                    </div>
                </div>
            </ParallaxLayer>
            <div className="hidden md:block">
                <ParallaxLayer className="-z-[1]" offset={props.index} speed={0.3}>
                    <div className="absolute left-0 top-20 w-1/2 h-full">
                        <div className="relative w-full h-full">
                            <Image
                                className="saturate-0 brightness-125 opacity-75"
                                src={`/assets/curl.svg`}
                                layout={"fill"}
                                objectFit={"cover"}
                                alt="star"
                                style={{
                                    maxWidth: "100%"
                                }} />
                        </div>
                    </div>
                </ParallaxLayer>
            </div>
            {
                (props.history.image) && (
                    <ParallaxLayer className="-z-[1]" offset={props.index} speed={0.6}>
                        <div className="absolute right-0 lg:right-10 md:p-10 h-full w-full px-16 md:w-2/3">
                            <div className="relative w-full h-full">
                                <Image
                                    className="drop-shadow-lg"
                                    src={`/assets/employment/${props.history.image}`}
                                    layout={"fill"}
                                    objectFit={"contain"}
                                    objectPosition={"right"}
                                    alt="star"
                                    style={{
                                        maxWidth: "100%"
                                    }} />
                            </div>
                        </div>
                    </ParallaxLayer>
                )
            }
        </React.Fragment>
    )

    const pages = histories.map((props, index) => {
        return (
            <Page
                key={index}
                history={props}
                index={index} />
        )
    })

    const parallax = useRef<IParallax>(null)

    const scroll = (next: boolean) => {
        if (parallax.current) {
            if (parallax.current.offset < histories.length - 1 && next) {
                parallax.current.scrollTo(parallax.current.offset + 1)
            }
            else if (parallax.current.offset > 0 && !next) {
                parallax.current.scrollTo(parallax.current.offset - 1)
            }
            // console.log("histories: %d, offset: %d",histories.length, parallax.current.offset)
        }
      }

    return (
        <React.Fragment>
            <div ref={dividerRef}>
                <Image
                    src={`/assets/waves-3.svg`}
                    width={960}
                    height={200}
                    layout={'responsive'}
                    alt={"waves"}
                    style={{
                        maxWidth: "100%"
                    }} />
            </div>
            <section ref={elementRef} className={`${className} px-3`}>
                <div className="flex flex-col min-w-full my-auto">
                    <div ref={ref1} className="transition-all pt-6 pb-12 bg-white rounded-xl" style={{transitionDuration:`.8s`, opacity:inView1 ? 1 : 0}}>
                        <h2 className="text-center mb-6 tracking-tight text-2xl md:text-3xl lg:text-4xl">
                            Employment History
                        </h2>
                        <div className="relative h-[75vh] md:h-[60vh] group">
                            <div className="absolute left-2 bottom-1/2 z-[1]">
                                <button onClick={() => scroll(false)} style={{ transitionDuration: "0.5s" }} className="transition-all opacity-100 md:opacity-0 group-hover:md:opacity-100 bg-slate-500 bg-opacity-50 text-white px-5 py-5 rounded-xl">
                                    <FaChevronLeft />
                                </button>
                            </div>
                            <div className="absolute right-2 bottom-1/2 z-[1]">
                                <button onClick={() => scroll(true)} style={{ transitionDuration: "0.5s" }} className="transition-all opacity-100 md:opacity-0 group-hover:opacity-100 bg-slate-500 bg-opacity-50 text-white px-5 py-5 rounded-xl">
                                    <FaChevronRight />
                                </button>
                            </div>
                            <Parallax ref={parallax} className="bg-slate-100" horizontal pages={pages.length}>
                                {pages}
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}