import React from "react";

const About: React.FC<{className?: string}> = ({className}) => {
    return (
        <section className={`${className} min-h-screen flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11">
                <p>
                    <strong>We will help you ship better apps</strong>
                </p>
            </div>
        </section>
    )
}

export default About