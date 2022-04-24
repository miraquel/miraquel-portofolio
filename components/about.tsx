import React from "react";
import Image from "next/image";
import Languages from "./languages";
import { useInView } from "react-intersection-observer";

const About: React.FC<{className?: string}> = ({className}) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: true
    });
    
    return (
        <section className={`${className} min-h-screen px-11 md:px-12 lg:px-14 xl:px-32 flex flex-col bg-white py-11 md:py-12 lg:py-14 xl:py-20 text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
            <div className="container mx-auto items-center transition-all">
                <div className="md:w-4/5 md:float-right md:py-5 md:pl-10 lg:pl-12 xl:pl-14">
                    <p className="leading-tight max-w-5xl tracking-tight">
                        My name is <strong>Chaidir Ali Assegaf.</strong> I am a software developer skilled in some programming languages/frameworks and experienced in some of the famous enterprise system.
                    </p>
                </div>
                <div className={`mt-8 flex flex-col items-center container md:w-1/5 md:float-left md:px-0 md:mt-0 md:p-5`} style={{transitionDuration:`1s`}}>
                    <Image className="rounded-2xl" src={`/assets/chaidir-ali.png`} width={288} height={400} alt="Chaidir Ali Assegaf" />
                </div>
            </div>
            <div className={`transition-all container mx-auto text-center mt-16`}>
                <h2 ref={ref} className={`${inView ? "opacity-100" : "opacity-0"} transition-all`} style={{transitionDuration:"1s"}}>Programming Languages &amp; Frameworks</h2>
                <div className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-20">
                    <Languages />
                </div>
            </div>
        </section>
    )
}

export default About