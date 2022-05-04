import React, { useRef, useState, useCallback, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { ScrollContext } from "../utils/scroll-observer";

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
    className?: string,
    posY?: MotionValue<number>
}

const Languages : React.FC<ILanguage> = (props) => {
    const [ ref, inView, entry ] = useInView({
        /* Optional options */
        threshold: 0.2,
        triggerOnce: true
    });
    const elementRef = useRef<HTMLElement>();

    // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
    const setRefs = useCallback(
        (node: any) => {
        // Ref's from useRef needs to have the node assigned to `current`
        elementRef.current = node;
        // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
        ref(node);
        },
        [ref],
    );

    const { scrollY } = useContext(ScrollContext)

    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(0);
    const [innerHeight, setInnerHeight] = useState(0);

    let transformY = useTransform(scrollY, [top, height + 200], [0, innerHeight + 200]);

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            setHeight(element.offsetTop + element.offsetHeight)
            setTop((element.offsetTop + element.offsetHeight) - window.innerHeight)
            setInnerHeight(window.innerHeight)
        }
    }, [])

    const languages = Props.map((prop, index) => {
        return (
            <div key={index} className={`${inView ? "opacity-100" : "opacity-0"} transition-all text-sm md:text-lg lg:text-xl xl:text-2xl`} style={{transitionDelay:`${((index + 1) * 0.1) + 0.3}s`, transitionDuration:`1s`}}>
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
        <motion.section ref={setRefs} style={{ y: transformY, z: 2 }} className={`${props.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
            <div className={`transition-all container mx-auto p-10 text-center`}>
                <h2 className={`${inView ? "opacity-100" : "opacity-0"} transition-all`} style={{transitionDuration:"0.8s"}}>Programming Languages, Frameworks &amp; Stacks</h2>
                <div className="mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-20">
                    {languages}
                </div>
            </div>
        </motion.section>
    )
}

export default Languages