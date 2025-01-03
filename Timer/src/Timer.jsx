import { useState } from "react";
import { useEffect } from "react";

const Timer = () =>{
      
  const [flag, setFlag] = useState(false);

  const[second,setSecond] = useState(0);
  const[minute,setMinute] = useState(0);
  const [hour,setHour] = useState(0);

  const [time, setTime] = useState(0);
  let id;



  useEffect(()=>{

    id = setInterval(() => {

        if(flag){
            setSecond(second-1);
        }

        if(second == 0){
            setSecond(59);
            setMinute(minute-1);
        }

        if(minute==0){
            setMinute(59)
            setHour(hour-1);
        }
        
    },1000 );


    return clearInterval(id);

  },[flag,second,minute,hour])


  const divide = ()=>{

    let newTime = time/60;

    setHour(Math.floor(newTime));
    setMinute(time-Math.floor(newTime)*60);
    setSecond(Math.floor(time/60));
    setFlag(true);
  }

  const handleStop = () => {
    setFlag(false);
  };

  const handleStart = () => {
    setFlag(true);
  };


  return (
    <div>
        <h1>Timer : {hour}: {minute} : {second}</h1>

        <input type="number" onChange={(e)=>setTime(e.target.value)} />
        
        {/* <button onClick={divide}>{flag ? "stop" : "start"}</button>  */}

        <button onClick={flag ? handleStop : divide}>{flag ? "Stop" : "Start"}</button>
        
    </div>
  )

}

export default Timer;