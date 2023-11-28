import React, { Component } from "react"
import "./TaskList.css"
class TaskList extends Component {
    render() {
        if (this.props.data.length < 1 || this.props.data === undefined) {
            return <></>
        }
        return (
            <div className="forms">
                <div className="form-title">Список дел</div>
                {this.props.data.map((item, index) => {
                    return (
                        <div className="task-content" key={item.id}>
                            <div className="task-content-title">
                                {++index + ") " + item.taskName}
                            </div>
                            <pre className="task-content-description">
                                {item.description}
                            </pre>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TaskList
