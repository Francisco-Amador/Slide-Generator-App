import React, { useEffect } from 'react'
import { Configuration, OpenAIApi } from "openai";
import getGPT from './funtion';
const Test = () => {

    useEffect(() => {
        console.log("TEST")
        getGPT();
        console.log("ERROR?")
    }, [])

    return (
        <div>

        </div>
    )
}

export default Test
