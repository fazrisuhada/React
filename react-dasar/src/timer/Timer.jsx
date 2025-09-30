import { useRef, useState } from "react";

export default function Timer() {
    const [start, setStart] = useState(0);
    const [now, setNow] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const timer = useRef(null);

    function handleStart(){
        if (timer.current) return;
        const startTime = Date.now() - elapsed
        setStart(startTime);
        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop(){
        clearInterval(timer.current)
        timer.current = null
        setElapsed(now - start)
    }

    function handleReset(){
        clearInterval(timer.current)
        timer.current = null
        setStart(0)
        setNow(0)
        setElapsed(0)
    }
    return (
        <div>
            <h1>Timer : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}