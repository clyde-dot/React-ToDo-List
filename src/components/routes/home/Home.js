import React, { useState } from "react"
import "./Home.css"

import TodoAdd from "../../ui/app-form-add-task/TodoAdd"
import Todos from "../../ui/app-task-list/Todos"

export default function Home() {
    const [taskName, setTaskName] = useState()
    const [taskDescription, setTaskDescription] = useState()

    return (
        <>
            <div className="container">
                <TodoAdd
                    taskName={taskName}
                    setTaskName={setTaskName}
                    taskDescription={taskDescription}
                    setTaskDescription={setTaskDescription}
                />
            </div>
            <Todos />
        </>
    )
}
