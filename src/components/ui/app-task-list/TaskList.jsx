import React, { Component } from "react"
import "./TaskList.css"
class TaskList extends Component {
    render() {
        const Tasks = () => {
            return (
                <div className="task-content">
                    <div className="task-content-title">Задача 1</div>
                    <div className="task-content-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam tempore magnam quaerat facilis quibusdam.
                        Quisquam consectetur consequuntur odio, aliquid
                        reiciendis saepe cupiditate itaque, blanditiis rerum
                        alias dolorum numquam, pariatur perspiciatis?
                    </div>
                </div>
            )
        }
        return (
            <div className="forms">
                <div className="form-title">Список дел</div>
                {<Tasks />}
            </div>
        )
    }
}

export default TaskList
