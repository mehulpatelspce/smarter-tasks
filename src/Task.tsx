import React from "react";
import "./TaskCard.css";

interface TaskProp {
    title: string;
    description: string;
    dueDate: string;
}
class Task extends React.Component<TaskProp> {
    render() {
        return (
            <div>
                <div className="TaskItem">
                    <h3>{this.props.title} ({this.props.dueDate})</h3>
                    {this.props.description}
                </div>

            </div>


        );
    }
}

export default Task;