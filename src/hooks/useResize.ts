import { useEffect, useState } from "react";




export const useResize = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const widthWindow = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', widthWindow)
        return () => window.removeEventListener('resize', widthWindow)
    }, [])
    return width
    
}