import Card from "./Card";
import useCounter from "../hooks/use-counter";

function PositiveCounter(){
    

    // Custom Hook that returns value increasing by 1 every second 
    const counter =  useCounter(true);

     return <Card>{counter}</Card>
}   
export default PositiveCounter;
