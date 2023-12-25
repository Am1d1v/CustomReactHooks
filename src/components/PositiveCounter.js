import { useState, useEffect } from "react";
import Card from "./Card";
import useCounter from "../hooks/use-counter";

function PositiveCounter(){
    
    //const [counter, setCounter] = useState(0);

    // Using custom hooks
    const counter =  useCounter();

    // The value increases by 1 every second
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((previousCounter) => {
    //             return previousCounter + 1
    //         })
    //     }, 1000)
    //     return() => clearInterval(interval)
    // }, []);
     return <Card>{counter}</Card>
}   
export default PositiveCounter;
