/** @format */

import Pomodoro from './';

const Header = () => {
  return (
    <header className="Header">
      <h1>
        Basic React Pomodoro Timer
        <img src="{Pomodoro}" className="header-image" alt="Pomodoro"></img>
      </h1>
    </header>
  );
};

export default Header;
