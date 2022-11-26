import React, { useCallback, useRef } from "react";
import Image from "next/legacy/image";
import { useInView } from "react-intersection-observer";
import Timeline from "./timeline";

export const Projects: React.FC<{ className?: string }> = ({ className }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: true
    });

    return (
        <React.Fragment>
            <section className={`${className} min-h-screen px-11 md:px-12 lg:px-14 xl:px-32 flex flex-col bg-white py-11 md:py-12 lg:py-14 xl:py-20 text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                <div className="transition-all container mx-auto">
                    <h2 ref={ref} className={`${inView ? "opacity-100" : "opacity-0"} text-center`} style={{ transitionDuration: `1s` }}>Projects</h2>
                    <Timeline className="mt-12" />
                </div>
            </section>
        </React.Fragment>
    )
}