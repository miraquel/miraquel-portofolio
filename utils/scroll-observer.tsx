import { ScriptProps } from "next/script";
import React, { useCallback, useEffect, useState } from "react";

interface scrollValue {
    scrollY: number
}

export const ScrollContext = React.createContext<scrollValue>({
    scrollY: 0
})

const ScrollObserver: React.FC<ScriptProps> = ({children}) => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })
        return () => document.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver