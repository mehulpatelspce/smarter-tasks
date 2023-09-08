import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
    tasks: TaskItem[];
    handleDeleteTask: (id: number) => void;
}

// interface State {
// //   tasks: TaskItem[];
// }
const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      item={task}
      // title={task.title}
      // description={task.description}
      // dueDate={task.dueDate}
      deleteTask = {() => props.handleDeleteTask(idx)}
    />
  ));
  
  return <>{list}</>;
};

export default TaskList;
