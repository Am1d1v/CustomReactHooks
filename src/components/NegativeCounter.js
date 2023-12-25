import Card from "./Card";
import useCounter from "../hooks/use-counter";

function NegativeCounter(){

    // Custom Hook that returns value decreasing by 1 every second 
    const counter =  useCounter(false);

    
    return <Card>{counter}</Card>
}   
export default NegativeCounter;
