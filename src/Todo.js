import { React, useState, useEffect } from "react";
import CreateNew from "./CreateNew";

function Task({ task, index, completed, unCompleted, removeTask }) {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
      {task.title}
      <button type="button" onClick={() => completed(index)}>
        complete
      </button>
      <button type="button" onClick={() => unCompleted(index)}>Uncompleted?</button>
      <button type="button" onClick={() => removeTask(index)}>remove</button>
    </div>
  );
}

let Todo = () => {
  let [values, setValues] = useState([
    { title: "Learning", completed: false },
    { title: "Cooking", completed: true },
    { title: "sleeping", completed: true },
  ]);
  let [remainingTask, setRemainingTask] = useState(0);

  useEffect(() => {
    setRemainingTask(values.filter(task => !task.completed).length)
  },[values])

  let addTask = (title) => {
    const newTasks = [...values, { title, completed: false }];
    setValues(newTasks);
  };

  let completed = (index) => {
    let completedTask = [...values];
    completedTask[index].completed = true;
    setValues(completedTask);
  };

  let unCompleted = (index) => {
    let uncompleted = [...values];
    uncompleted[index].completed = false;
    setValues(uncompleted);
  }

  let removeTask = (index) => {
    let remove = [...values];
    remove.splice(index,1);
    setValues(remove);
  }

  return (
    <div>
    <div>Pending Task {remainingTask}</div>
      <div>
        {values.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completed={completed}
            unCompleted={unCompleted}
            removeTask={removeTask}
          ></Task>
        ))}
      </div>
      <div>
        <CreateNew addTask={addTask} />
      </div>
    </div>
  );
};

export default Todo;
