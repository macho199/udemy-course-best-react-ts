import React, { useRef, useState } from 'react';
import ResultModal, { DialogHandle } from './ResultModal';

type TimerChallengeProps = {
  title: string;
  targetTime: number;
};

const TimerChallenge = ({ title, targetTime }: TimerChallengeProps) => {
  const timer = useRef<NodeJS.Timeout>(setTimeout(() => {}));
  const dialog = useRef<DialogHandle>(null);

  const [timeRemaining, setTimeRemaining] = useState<number>(targetTime * 1000);

  const timerIsActive: boolean =
    timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current?.open();
    clearTimeout(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
