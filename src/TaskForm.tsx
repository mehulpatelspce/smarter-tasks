import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: ""
    }
  }
  // inputRef = React.createRef<HTMLInputElement>();
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
    console.log(`Submitted the form!`);
    console.log(`Title =  ${this.state.title}`);
    console.log(`Description = ! ${this.state.description}`);
    console.log(`Due Date = ! ${this.state.dueDate}`);
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descirptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div className="flex gap-2 py-4">
          <div className="flex-auto">
            <input type="text" id="todoTitle"
              className="border border-gray-600 rounded text-gray-900 w-full p-2 text-sm" required
              placeholder="What's next?"
              value={this.state.title} onChange={this.titleChanged} />
          </div>
          <div className="flex-auto">
            <input type="text" id="todoDescription"
              className="border border-gray-600 rounded text-gray-900 w-full p-2 text-sm"
              placeholder="Description (If any)!"
              value={this.state.description} onChange={this.descirptionChanged} />
          </div>
          <div className="flex-auto">
            <input type="date" id="todoDueDate" required
              className="border border-gray-600 rounded text-gray-900 w-full p-2 text-sm leading-4"
              value={this.state.dueDate} onChange={this.dueDateChanged} />
          </div>
          <div className="flex-none">
            <button type="submit" id="addTaskButton"
              className="bg-green-600 text-white rounded px-5 py-2 font-medium mr-2 mb-2">Add Item</button>
          </div>
        </div>


      </form>
    )
  }
}
export default TaskForm;