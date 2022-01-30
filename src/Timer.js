/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const Timer = (props) => {
  const timerColour = document.querySelector('.timer-style');
  console.log(timerColour);
  const { initialMinute = 0, initialSeconds = 2 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [phase, setPhase] = useState(1);
  const [status, setStatus] = useState('WORK');
  const [rounds, setRounds] = useState(1);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
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
    if (minutes === 0 && seconds === 0) {
      if (phase % 2 === 0 && phase < 8) {
        setMinutes(0);
        setSeconds(2);
        setStatus('WORK');
        setPhase(phase + 1);
        setRounds(rounds + 1);
        timerColour.style.setProperty('background', 'lightgreen');
      }
      if (phase % 2 === 1 && phase <= 9) {
        if (phase === 9) {
          setStatus('WORK');
          setPhase(2);
          setRounds(0);
        } else {
          setMinutes(0);
          setSeconds(2);
          setPhase(phase + 1);
          setStatus('REST');
          timerColour.style.setProperty('background', 'lightpink');
        }
      }
      if (phase === 8) {
        setStatus('EXTENDED REST');
        setMinutes(0);
        setSeconds(2);
        setPhase(phase + 1);
        timerColour.style.setProperty('background', 'red');
      }

      return;
    }
    return;
  };

  return (
    <div className="timer-style">
      <h1>Current Task : {}</h1>
      {resetPhases()}
      <h1>Completed Rounds: {rounds}/4</h1>
      <h1>{`${status} FOR:`} </h1>
      <h1 className="Counter">
        {minutes} : {seconds}{' '}
      </h1>
    </div>
  );
};

export default Timer;
