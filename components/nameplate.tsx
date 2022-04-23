import React from "react";
import SocialLinks from "./sociallinks";

const NamePlate: React.FC<{className?: string}> = ({className}) => {
    return(
        <div className={`${className} pt-8 pb-6 font-bold z-10 text-white
        flex flex-col justify-center items-center flex-1
        border-2 border-white rounded-lg transition-all duration-500`}>
            <h1 className="px-8 md:mb-6 mb-3 md:text-4xl text-2xl xl:tracking-widest">Chaidir Ali Assegaf</h1>
            <h2 className="px-8 mb-6 xl:text-2xl md:text-xl text-lg xl:tracking-wide tracking-tight ">
                <span>Software Developer</span>
            </h2>
            <div className="px-5 xl:text-4xl text-3xl flex">
                <SocialLinks className="xl:px-7 md:px-4 px-3 hover:scale-[135%] duration-[.25] transition-all" />
            </div>
        </div>
    )
}

export default NamePlate