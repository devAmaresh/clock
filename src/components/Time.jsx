import React from "react";
import { useState } from "react";
function Time(){
    setInterval(updateTime,1000);
    const now = new Date().toLocaleTimeString();
    const [time,setTime]=useState(now);

    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

 return(
        <div className="time">{time}
        {/* <button onClick={updateTime}>Show Time</button> */}
        </div>
    

 );
}
export default Time;
