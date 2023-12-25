import { useState, useEffect } from "react";
import Card from "./Card";
import useCounter from "../hooks/use-counter";

function NegativeCounter(){
    
    // const [counter, setCounter] = useState(0);

    const counter =  useCounter();

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((previousCounter) => {
    //             return previousCounter - 1
    //         })
    //     }, 1000)
    //     return() => clearInterval(interval)
    // }, []);
    return <Card>{counter}</Card>
}   
export default NegativeCounter;
