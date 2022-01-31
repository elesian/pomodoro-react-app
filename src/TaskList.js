/** @format */

import TaskItem from './TaskItem';
import React from 'react';
import { useState } from 'react';
import Timer from './Timer';

const removeItem = (cb, task, list, setCurrentTask) => {
  setCurrentTask('');
  const arrayValue = list.filter((element) => element !== task);
  console.log(arrayValue);
  cb(() => {
    return arrayValue;
  });
};

const resetTimer = (setReset, task, setCurrentTask) => {
  setReset(true);
  setCurrentTask(task);
};

const TaskList = () => {
  const [list, setList] = useState(['Task1', 'Task2', 'Task3']);
  const [reset, setReset] = useState(false);
  const [task, setCurrentTask] = useState('');
  return (
    <div>
      {task !== '' && list.includes(task) ? (
        <div>
          <Timer currentTask={task} reset={reset} resetFunction={setReset} />
        </div>
      ) : null}
      <div className="task-list">
        <h2>Task List</h2>
        {list.length !== 0 ? (
          <ol>
            {list.map((task) => {
              return (
                <li key={task}>
                  {task}
                  <button
                    className="button"
                    onClick={() => resetTimer(setReset, task, setCurrentTask)}
                  >
                    SELECT
                  </button>
                  <button
                    className="button"
                    onClick={() =>
                      removeItem(setList, task, list, setCurrentTask)
                    }
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <h3>You have no outstanding tasks</h3>
        )}
      </div>

      <TaskItem></TaskItem>
    </div>
  );
};

export default TaskList;
