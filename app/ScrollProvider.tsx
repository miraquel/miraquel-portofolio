'use client';

import React, { useCallback, useEffect, useState, createContext } from "react";

interface scrollValue {
    scrollY: number
}

export const ScrollContext = createContext<scrollValue>({
    scrollY: 0
})

export default function ScrollProvider({ children }: { children: React.ReactNode; }) {
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