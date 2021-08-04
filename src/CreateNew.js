import { useState } from "react";

let CreteNew = ({addTask}) => {
  let [newTask, setNewTask] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    if(!newTask) return;
    addTask(newTask);
    setNewTask("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        placeholder="Add a new task"
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreteNew;
