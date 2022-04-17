import React from "react";
import SocialLinks from "./sociallinks";

const NamePlate: React.FC<{className?: string}> = ({className}) => {
    return(
        <div className={`${className} px-8 pt-8 pb-6 font-bold z-10 text-white
        flex flex-col justify-center items-center flex-1
        border-2 border-white rounded-lg transition-all duration-500`}>
            <h1 className="mb-6 text-4xl xl:tracking-widest">Chaidir Ali Assegaf</h1>
            <h2 className="mb-6 text-2xl xl:tracking-wide tracking-tight ">
                <span>Software Developer</span>
            </h2>
            <div className="text-4xl flex">
                <SocialLinks className="px-7 hover:scale-[135%] duration-[.25] transition-all" />
            </div>
        </div>
    )
}

export default NamePlate