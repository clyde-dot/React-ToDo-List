import React, { useState } from "react"
import uniqid from "uniqid"
import "./FormAdd.css"
const FormAdd = (props) => {
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [dataTasks, setDataTasks] = useState({})

    const handleChangeTaskName = (e) => {
        setTaskName(e.target.value)
    }
    const handleChangeTaskDescription = (e) => {
        setTaskDescription(e.target.value)
    }
    const handleBtnAdd = (e) => {
        let id = uniqid().toString()
        setDataTasks({
            ...dataTasks,
            [id]: { task: taskName, description: taskDescription },
        })
    }

    return (
        <div className="form-add">
            <div className="form-add-title">Add task</div>
            <input
                className="form-add-data form-add-input"
                type="text"
                placeholder="Task name"
                onChange={handleChangeTaskName}
                value={taskName || ""}
                maxLength={100}
            />
            <textarea
                className="form-add-data form-add-textarea"
                type="text"
                placeholder="Description"
                value={taskDescription}
                onChange={handleChangeTaskDescription}
            />
            <button className="form-add-button" onClick={handleBtnAdd}>
                Add
            </button>
        </div>
    )
}

export default FormAdd
