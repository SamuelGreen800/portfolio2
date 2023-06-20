import React, { useState, useEffect } from "react";


const TEXT = ['Javascript', 'Python', 'Java']
const ICON = [[<i className="fa-brands fa-js-square js-icon flash-icon-js"></i>],
            [<i className="fa-brands fa-python flash-icon-python python-icon"></i>],
            [<i className="fa-brands fa-java flash-icon-java"></i> ]]

const Fader = ({}) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    })
    const [text, setText] = useState(0)
    const [icon, setIcon] = useState(0)

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

    useEffect(() => {
    const wordTimeout = setInterval(() => {
        setText((prevText) => (prevText + 1) % TEXT.length)
    }, 3000)

    return () => clearInterval(wordTimeout)
    }, [])

    useEffect(() => {
        const iconTimeout = setInterval(() => {
            setIcon((prevIcon) => (prevIcon + 1) % ICON.length)
        }, 3000)
    
        return () => clearInterval(iconTimeout)
        }, [])

    return (

        <span className={fadeProp.fade}> {ICON[icon]} {TEXT[text]} </span>
    )

}
export default Fader