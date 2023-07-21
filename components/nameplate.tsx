import React from "react";
import SocialLinks from "./sociallinks";

const NamePlate: React.FC<{className?: string}> = ({className}) => {
    return(
        <div className={`${className} pt-8 pb-6 font-bold z-10 text-white
        flex flex-col justify-center items-center flex-1
        border-2 border-white rounded-lg transition-all duration-500`}>
            <h1 className="px-8 md:mb-5 mb-3 md:text-3xl text-2xl md:tracking-widest">Chaidir Ali Assegaf</h1>
            <h2 className="px-8 mb-6 md:text-xl text-lg md:tracking-wide tracking-tight ">
                <span>Software Developer</span>
            </h2>
            <div className="px-5 text-3xl flex">
                
            </div>
        </div>
    )
}

export default NamePlate