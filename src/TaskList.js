/** @format */

import TaskItem from './TaskItem';
import React from 'react';
import { useState } from 'react';
import Timer from './Timer';

const removeItem = (cb, task, list, setCurrentTask, item) => {
  console.log(item);
  const arrayValue = list.filter((element) => element !== item);
  console.log(arrayValue);
  if (task !== null) {
    setCurrentTask(arrayValue[0]);
  } else {
    setCurrentTask(null);
  }

  if (arrayValue.length === 0) {
    setCurrentTask(null);
  }

  cb(() => {
    return arrayValue;
  });
};

const resetTimer = (setReset, task, setCurrentTask, item) => {
  setReset(true);
  setCurrentTask(item);
  console.log(item);
};

const TaskList = () => {
  const [list, setList] = useState(['Task1', 'Task2', 'Task3']);
  const [reset, setReset] = useState(false);
  const [task, setCurrentTask] = useState(null);
  return (
    <div>
      {list.length !== 0 && task !== null ? (
        <div>
          <Timer currentTask={task} />
        </div>
      ) : null}
      <div>
        <TaskItem setList={setList}></TaskItem>
      </div>
      <div className="task-list">
        <h2>Task List</h2>
        {list.length !== 0 ? (
          <ol>
            {list.map((item) => {
              return (
                <li key={item}>
                  {item}
                  <button
                    className="button"
                    onClick={() =>
                      resetTimer(setReset, task, setCurrentTask, item)
                    }
                  >
                    SELECT
                  </button>
                  <button
                    className="button"
                    onClick={() =>
                      removeItem(setList, task, list, setCurrentTask, item)
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
    </div>
  );
};

export default TaskList;
