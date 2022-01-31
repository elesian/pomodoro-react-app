/** @format */

import image from './Pomodoro.jpg';

const Header = () => {
  return (
    <header className="Header">
      <h1>Pomodoro Timer </h1>
      <img src={image} className="header-image" alt="Pomodoro" />
    </header>
  );
};

export default Header;
