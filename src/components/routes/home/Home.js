import React, { useState } from "react"
import "./Home.css"

import FormAdd from "../../ui/app-form-add-task/FormAdd"
import TaskList from "../../ui/app-task-list/TaskList"

export default function Home() {
    const [taskName, setTaskName] = useState()
    const [taskDescription, setTaskDescription] = useState()

    return (
        <>
            <div className="container">
                <FormAdd
                    taskName={taskName}
                    setTaskName={setTaskName}
                    taskDescription={taskDescription}
                    setTaskDescription={setTaskDescription}
                />
            </div>
            <div className="container">
                <TaskList />
            </div>
        </>
    )
}
