import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface IProps {
    img: string,
    name: string,
    url: string,
    style?: React.CSSProperties
}

const Props : IProps[] = [
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

const Languages : React.FC<{className?: string}> = ({className}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });

    const languages = Props.map((prop, index) => {
        return (
            <div ref={ref} key={index} className={`${className} ${inView ? "opacity-100" : "opacity-0"} transition-all text-sm md:text-lg lg:text-xl xl:text-2xl`} style={{transitionDelay:`${inView ? (index + 1) * 0.1 : 0}s`, transitionDuration:`${inView ? 1 : 0.2}s`}}>
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
            {languages}
        </React.Fragment>
    )
}

export default Languages