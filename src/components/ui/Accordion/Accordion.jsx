import React from "react"
import "./Accordion.css"

import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"
import { FcEmptyTrash } from "react-icons/fc"
import { AiFillCaretRight } from "react-icons/ai"

function Accordion({ todo, toggleComplete, handleDelete }) {
    return (
        <div className="task-content" key={todo.id}>
            <div className="task-content-title">
                <AiFillCaretRight size="30px" />
                <div>{todo.title}</div>
            </div>
            <pre className="task-content-description">{todo.description}</pre>
            <div className="task-controller">
                {!todo.completed ? (
                    <FcLikePlaceholder
                        className="task-controller-button"
                        size="50px"
                        onClick={() => toggleComplete(todo)}
                    />
                ) : (
                    <FcLike
                        className="task-controller-button"
                        size="50px"
                        onClick={() => toggleComplete(todo)}
                    />
                )}
                <FcEmptyTrash
                    className="task-controller-button"
                    size="50px"
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </div>
    )
}

export default Accordion
