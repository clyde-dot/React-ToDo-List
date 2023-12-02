import React from "react"
import uniqid from "uniqid"
import "./TodoAdd.css"

import { db } from "../../../firebase"
import { collection, addDoc } from "firebase/firestore"

const FormAdd = ({
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
}) => {
    const handleBtnAdd = async () => {
        //check null
        if (!taskName || !taskDescription) {
            alert("Enter task name and description !")
            return
        }

        //save data
        const id = uniqid().toString()
        const title = taskName
        const description = taskDescription
        const completed = false

        //Clear inputs
        setTaskName("")
        setTaskDescription("")

        await addDoc(collection(db, "todos"), {
            id,
            title,
            description,
            completed,
        })
    }

    return (
        <div className="forms">
            <div className="form-title">Add ToDo</div>
            <input
                className="form-add-data form-add-input"
                type="text"
                placeholder="Task name"
                onChange={(e) => {
                    setTaskName(e.target.value)
                }}
                value={taskName || ""}
                maxLength={100}
            />
            <textarea
                className="form-add-data form-add-textarea"
                type="text"
                placeholder="Description"
                value={taskDescription}
                onChange={(e) => {
                    setTaskDescription(e.target.value)
                }}
            />
            <button className="form-add-button" onClick={handleBtnAdd}>
                Add
            </button>
        </div>
    )
}

export default FormAdd
