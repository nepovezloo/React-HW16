import React, {useState, useEffect} from 'react';

let timerID ;
const Timer = ({time, step, autostart, onTick}) => {
    const [seconds, setSeconds] = useState(time/1000);
    const [stop, setStop] = useState(false);

    useEffect(() => {
      if (seconds > 0 && stop) {
        setTimeout(() => setSeconds(seconds - (step/1000)), 1000);
      } else {
        setStop(false);
      }
      onTick(seconds)
    }, [seconds, stop]);
  
    return (
      <div className="App">
        <div>
            <h1>Timer</h1>
          <div>{seconds}</div>
          <button onClick={() => setStop(!stop)}>{stop ? 'stop' : 'start'}</button>
        </div>
      </div>
    );
}

export default Timer;