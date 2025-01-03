import { useEffect, useState } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputTime, setInputTime] = useState(0);

  const resetTimer = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setInputTime(0);
  };

  const updateTime = () => {
    if (inputTime > 0) {
      const totalSeconds = inputTime * 60;
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(totalSeconds % 60);
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIsRunning(false);
        } else {
          if (seconds > 0) {
            setSeconds((second) =>second - 1);
          } else if (minutes > 0) {
            setSeconds(59);
            setMinutes((minute) => minute - 1);
          } else if (hours > 0) {
            setMinutes(59);
            setSeconds(59);
            setHours((hour) => hour - 1);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, hours, minutes, seconds]);

  return (
    <div>
      <h1>Timer: {hours}:{minutes}:{seconds}</h1>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={updateTime}>Set Time</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <label>Set Time (in Minutes):</label>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Timer;
