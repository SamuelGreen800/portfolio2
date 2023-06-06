import React, { useState, useEffect } from "react";
import { propTypes } from "prop-types";
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

    Fader.defaultProps = {
        text: 'Javascript',
    }

    Fader.propTypes = {
        text: propTypes.string
    }

}
export default Fader