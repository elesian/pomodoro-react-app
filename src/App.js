/** @format */
import './App.css';
import TaskList from './TaskList.js';
import Timer from './Timer.js';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <TaskList />
    </div>
  );
}

export default App;
