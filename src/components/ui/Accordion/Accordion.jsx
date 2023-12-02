import React, { useState, useRef } from "react"
import "./Accordion.css"

import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"
import { FcEmptyTrash } from "react-icons/fc"
import { GoTriangleDown } from "react-icons/go"

function Accordion({ id, todo, toggleComplete, handleDelete }) {
    const [openId, setId] = useState(null)
    const itemRef = useRef(null)
    return (
        <li className="accordion-item">
            <div
                className="accordion-header"
                onClick={() => (id === openId ? setId(null) : setId(id))}
            >
                <GoTriangleDown
                    className={`accordion-arrow ${
                        id === openId ? "active" : ""
                    }`}
                    size="30px"
                />
                <div>{todo.title}</div>
            </div>
            <div
                className="accordion-collapse"
                style={
                    id === openId
                        ? { height: itemRef.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <pre className="accordion-body" ref={itemRef}>
                    {todo.description}
                </pre>
            </div>

            <div className="task-controller">
                {!todo.completed ? (
                    <FcLikePlaceholder
                        className="task-controller-button"
                        size="40px"
                        onClick={() => toggleComplete(todo)}
                    />
                ) : (
                    <FcLike
                        className="task-controller-button"
                        size="40px"
                        onClick={() => toggleComplete(todo)}
                    />
                )}
                <FcEmptyTrash
                    className="task-controller-button"
                    size="40px"
                    onClick={() => handleDelete(todo.id)}
                />
            </div>
        </li>
    )
}

export default Accordion
