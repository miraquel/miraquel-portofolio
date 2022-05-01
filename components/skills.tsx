import React, { ElementRef, LegacyRef, Ref } from "react";
import Image from "next/image";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import { throws } from "assert";

interface ISkill {
    id: number,
    name: string,
    stars: number
}

const Skillset : ISkill[] = [
    {
        id:1,
        name: "C#",
        stars: 4
    },
    {
        id:2,
        name: "Microsoft Office 2013",
        stars: 3
    },
    {
        id:3,
        name: "Microsoft Office 2013",
        stars: 3
    },
    {
        id:4,
        name: "Microsoft Office 2013",
        stars: 3
    },
    {
        id:5,
        name: "Microsoft Office 2013",
        stars: 3
    }
]

const Skills = ({className}: {className?: string}) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    const skillList = Skillset.map((prop, index) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <div style={{transitionDuration:`0.5s`, transitionDelay:`${((index + 1) * 0.2) + (i * 0.1)}s`}} className={`${inView1 ? "scale-100" : "scale-0"} px-2 relative w-1/5 pb-12 ${i > prop.stars ? "grayscale" : ""}`}>
                    <Image src={"/assets/star.svg"} layout={"fill"} objectFit={"contain"} alt="star" />
                </div>
            );
        }
        return (
            <div ref={ref1} key={prop.id} className="transition-all flex flex-row items-center place-content-end py-3 px-6 md:px-10 lg:px-24"
                style={{opacity:inView1 ? 1 : 0, transitionDuration:`1s`, transitionDelay:`${(index + 1) * 0.2}s`}}>
                <p className="w-1/3 text-sm md:text-lg lg:text-xl">{prop.name}</p>
                <div className="w-2/3 pl-6 flex flex-row">
                    {stars}
                </div>
            </div>
        )
    })

    return (
        <section className={`${className}`}>
            <div className="min-h-screen mx-5 md:mx-12 lg:mx-14 xl:mx-32">
                <div ref={ref1} className="transition-all bg-white py-8 md:py-12 lg:py-16 xl:py-20 rounded-xl" style={{transitionDuration:`.8s`, opacity:inView1 ? 1 : 0}}>
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl">
                        Skills
                    </h2>
                    <div className="md:pt-8 lg:pt-10 xl:pt-12">
                        {skillList}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;