import { useEffect, useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((previousCounter) => {
                return previousCounter + 1
            })
        }, 1000)
        return() => clearInterval(interval)
    }, []);
};
export default useCounter;