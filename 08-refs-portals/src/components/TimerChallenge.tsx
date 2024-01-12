import React, { useRef, useState } from "react";

type TimerChallengeProps = {
  title: string
  targetTime: number
};

//let timer: NodeJS.Timeout;

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const timer = useRef<NodeJS.Timeout>(setTimeout(()=>{}));

  const [timerStarted, setTimerStarted] = useState<boolean>(false)
  const [timerExpired, setTimerExpired] = useState<boolean>(false)
  
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000);
    
    setTimerStarted(true);
  }

  const handleStop = () => {
    clearTimeout(timer.current)
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You loat!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;
