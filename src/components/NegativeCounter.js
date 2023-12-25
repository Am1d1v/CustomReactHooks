import { useState, useEffect } from "react";
import Card from "./Card";


function NegativeCounter(){
    
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((previousCounter) => {
                return previousCounter - 1
            })
        }, 1000)
        return() => clearInterval(interval)
    }, []);
    return <Card>{counter}</Card>
}   
export default NegativeCounter;
