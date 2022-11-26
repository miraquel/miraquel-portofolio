import React, { useRef, useState, useCallback, useContext } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ScrollContext } from "../../utils/scroll-observer";

interface ILanguageList {
    img: string,
    name: string,
    url: string,
    style?: React.CSSProperties
}

const Props : ILanguageList[] = [
    {
        name: "C#",
        img: "csharp",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        img: "php",
        name: "PHP",
        url: "https://www.php.net/"
    },
    {
        img: "javascript",
        name: "JavaScript",
        url: "https://www.javascript.com/"
    },
    {
        img: "typescript",
        name: "TypeScript",
        url: "https://www.typescriptlang.org/"
    },
    {
        img: "tailwindcss",
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/"
    },
    {
        img: "dotnet",
        name: ".Net",
        url: "https://dotnet.microsoft.com/"
    },
    {
        img: "blazor",
        name: "Blazor",
        url: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
    },
    {
        img: "react",
        name: "React",
        url: "https://reactjs.org/"
    },
    {
        img: "laravel",
        name: "Laravel",
        url: "https://laravel.com/"
    },
    {
        img: "d365",
        name: "Dynamics 365",
        url: "https://dynamics.microsoft.com/"
    },
    {
        img: "sqlserver",
        name: "SQL Server",
        url: "https://www.microsoft.com/en-us/sql-server/"
    },
    {
        img: "mysql",
        name: "MySQL",
        url: "https://www.mysql.com/"
    }
]

interface ILanguage {
    className?: string
}

export const Languages : React.FC<ILanguage> = (props) => {
    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        threshold: 0.2,
        triggerOnce: true
    });
    const [ ref2, inView2, entry2 ] = useInView({
        /* Optional options */
        threshold: 0
    });
    const elementRef = useRef<HTMLElement>();

    // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
    const setRefs = useCallback(
        (node: any) => {
        // Ref's from useRef needs to have the node assigned to `current`
        
        elementRef.current = node;
        // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
        ref(node);
        ref2(node);
        },
        [ref, ref2],
    );

    const { scrollY } = useContext(ScrollContext)

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
            progress = Math.min(1.2, Math.max(0, (scrollY - offsetTop) / scrollHeight))
            // console.log("scrollY: %d, scrollTop: %d, scrollHeight: %d, innerTop: %d, progress: %d", scrollY, offsetTop, scrollHeight, innerTop, progress)
        }
    }

    const languages = Props.map((prop, index) => {
        return (
            <div key={index} className={`${inView ? "opacity-100" : "opacity-0"} transition-all text-sm md:text-lg lg:text-xl`} style={{transitionDelay:`${((index + 1) * 0.1) + 0.3}s`, transitionDuration:`1s`}}>
                <Link href={prop.url}>
                    <a target="_blank">
                        <Image src={`/assets/languages/language_${prop.img}.svg`} alt={prop.name} width={1366} height={1555} style={prop.style} />
                        {prop.name}
                    </a>
                </Link>
            </div>
        )
    });

    return (
        <React.Fragment>
            <section ref={setRefs} id={"test"} style={{ top: innerTop }} className={`${props.className} ${progress > 0 && progress < 1.25 ? "sticky -z-10" : ""} transition-all text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                <div className={`transition-all container mx-auto px-16 lg:px-20 lg:py-20 text-center`}>
                    <h2 className={`${inView ? "opacity-100" : "opacity-0"} transition-all`} style={{transitionDuration:"0.8s"}}>Programming Languages, Frameworks &amp; Stacks</h2>
                    <div className="mt-10 lg:mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-x-24 lg:gap-y-12">
                        {languages}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}