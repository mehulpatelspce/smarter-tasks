import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
    tasks: TaskItem[];
}
interface State {
//   tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
    // constructor(props: Props){
    //     super(props);
    //     this.state = {
    //         tasks: [{ title: "Pay rent" }, { title: "Submit assignment" }],
    //     };
    // }
    // componentDidMount() {
    //     const   tasks = [{ title: "Pay rent" }, { title: "Submit assignment...." }]
    //     this.setState((state, props) => ({
    //       tasks,
    //       }))
        
    // }
  render(){
    return (
        this.props.tasks.map((task, idx) => 
        <Task key={idx} title={task.title} 
        description={task.description} dueDate={task.dueDate} />)
        );
  }
}

export default TaskList;