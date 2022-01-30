/** @format */
import './App.css';
import TaskList from './TaskList';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <TaskList></TaskList>
      <Timer></Timer>
    </div>
  );
}

export default App;
