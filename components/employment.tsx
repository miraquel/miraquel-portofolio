import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Employment = ({className}: {className?: string}) => {
    const [ref1, inView1, entry1] = useInView({
        /* Optional options */
        threshold: .5,
        triggerOnce: true
    });

    return (
        <section className={`${className}`}>
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
        </section>
    )
}

export default Employment;