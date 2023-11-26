import React from "react"
import uniqid from "uniqid"
import "./FormAdd.css"
const FormAdd = (props) => {
    const {
        taskName,
        setTaskName,
        taskDescription,
        setTaskDescription,
        data,
        setData,
    } = props
    const handleChangeTaskName = (e) => {
        setTaskName(e.target.value)
    }
    const handleChangeTaskDescription = (e) => {
        setTaskDescription(e.target.value)
    }

    const handleBtnAdd = () => {
        if (!taskName || !taskDescription) {
            alert("Enter task name and description !")
            return
        }
        let id = uniqid().toString()
        setData([
            ...data,
            {
                id: id,
                taskName: taskName,
                description: taskDescription,
            },
        ])
        setTaskName("")
        setTaskDescription("")
        alert("Task added !")
    }

    return (
        <div className="forms">
            <div className="form-title">Add task</div>
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
