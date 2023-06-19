import React, { useState, useEffect } from "react";
import Hero from "./Hero";


const Fader = ({ text, icon }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    })

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 1500); return () => clearInterval(timeout)
    }, [fadeProp])

    return (

        <span className={fadeProp.fade}> {icon} {text} </span>
    )

}
export default Fader