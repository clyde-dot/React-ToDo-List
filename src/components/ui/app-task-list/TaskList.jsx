import React, { Component } from "react"
import "./TaskList.css"
class TaskList extends Component {
    render() {
        const Tasks = () => {
            return (
                <>
                    {this.props.data.map((item, index) => {
                        return (
                            <div className="task-content" key={item.id}>
                                <div className="task-content-title">
                                    {++index + ") " + item.taskName}
                                </div>
                                <div className="task-content-description">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </>
            )
        }
        return (
            <div className="forms">
                <div className="form-title">Список дел</div>
                {Tasks()}
            </div>
        )
    }
}

export default TaskList
