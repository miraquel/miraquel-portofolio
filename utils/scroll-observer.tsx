import { motionValue, MotionValue, useViewportScroll } from "framer-motion";
import { ScriptProps } from "next/script";
import React, { useCallback, useEffect, useState } from "react";

interface scrollValue {
    scrollY: MotionValue<number>
}

export const ScrollContext = React.createContext<scrollValue>({
    scrollY: motionValue(0)
})

const ScrollObserver: React.FC<ScriptProps> = ({children}) => {
    const { scrollY } = useViewportScroll();

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver