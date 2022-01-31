/** @format */

import React from 'react';
import { useState, useEffect } from 'react';

const Timer = ({
  initialSeconds = 5,
  initialMinute = 10,
  currentTask,
  pause,
  setPause,
}) => {
  const timerColour = document.querySelector('.timer-style');
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [phase, setPhase] = useState(1);
  const [status, setStatus] = useState('WORK');
  const [rounds, setRounds] = useState(1);

  let isPaused = true;
  useEffect(() => {}, [isPaused]);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > -1) {
        setSeconds(seconds - 1);
      }
      if (seconds === -1) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const resetPhases = () => {
    if (minutes !== 0 && seconds === -1) {
      setSeconds(59);
      setMinutes(minutes - 1);
    }
    if (minutes === 0 && seconds === -1) {
      if (phase % 2 === 0 && phase < 8) {
        setMinutes(0);
        setSeconds(2);
        setPhase(phase + 1);
        setStatus('WORK');
        setRounds(rounds + 1);
        timerColour.style.setProperty('background', 'lightgreen');
      }
      if (phase % 2 === 1 && phase <= 9) {
        if (phase === 9) {
          setPhase(0);
          setRounds(0);
        }
        setMinutes(0);
        setSeconds(2);
        setPhase(phase + 1);
        setStatus('REST');
        timerColour.style.setProperty('background', 'lightpink');
      }

      if (phase === 8) {
        setStatus('EXTENDED REST');
        setMinutes(0);
        setSeconds(2);
        setPhase(0);
        setRounds(0);
        timerColour.style.setProperty('background', 'red');
      }
    }
  };

  return (
    <div className="timer-style">
      <h1>Current Task : {currentTask.toUpperCase()}</h1>
      {resetPhases()}
      {status === 'EXTENDED REST' ? (
        <h1>You have completed a full Pomodoro!</h1>
      ) : (
        <h1>Completed Rounds: {rounds}/4</h1>
      )}
      <h1>{`${status} FOR:`} </h1>
      <h1 className="Counter">
        {minutes < 10 ? `0${minutes}m` : `${minutes}m`}
        {' : '}
        {seconds < 10 ? `0${seconds}` : `${seconds}`}s
      </h1>
    </div>
  );
};

export default Timer;
