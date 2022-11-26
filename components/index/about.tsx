import React, { useRef, useContext, useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../../utils/scroll-observer";

interface IAbout {
    className?: string
}

export const About: React.FC<IAbout> = (props) => {
    // const { ref, inView } = useInView({
    //     /* Optional options */
    //     threshold: 1,
    //     triggerOnce: true
    // });

    const { scrollY } = useContext(ScrollContext)
    const elementRef = useRef<HTMLElement>(null);

    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);

    // useEffect(() => {
    //     const element = elementRef.current;
    //     if (element) {
    //         setHeight(element.offsetTop + element.offsetHeight)
    //         setTop((element.offsetTop + element.offsetHeight) - window.innerHeight)
    //         setInnerHeight(window.innerHeight)
    //     }
    // }, [])
    
    return (
        <React.Fragment>
            <section className={`${props.className} text-xl md:text-2xl lg:text-3xl`}>
                <div className="container mx-auto transition-all items-center md:items-start flex flex-col-reverse md:flex-row">
                    <div className={`md:w-1/5 mt-10 md:mt-0`} style={{transitionDuration:`1s`}}>
                        <Image
                            className="rounded-2xl"
                            src={`/assets/chaidir-ali.png`}
                            width={288}
                            height={400}
                            alt="Chaidir Ali Assegaf"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <div className="md:w-4/5 md:pl-10 lg:pl-12 xl:pl-14">
                        <p className="leading-loose max-w-5xl tracking-tight">
                            My name is <strong>Chaidir Ali Assegaf.</strong> I am a software developer skilled in some programming languages or frameworks and experienced in some of the famous ERP system.
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}