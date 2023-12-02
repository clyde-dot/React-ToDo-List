import React, { useState, useEffect } from "react"
import "./TaskList.css"

import {
    collection,
    query,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore"
import { db } from "../../../firebase"

import { FcLikePlaceholder } from "react-icons/fc"
import { FcLike } from "react-icons/fc"
import { FcEmptyTrash } from "react-icons/fc"

export default function TaskList() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const q = query(collection(db, "todos"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = []
            querySnapshot.forEach((doc) => {
                todosArray.push({ ...doc.data(), id: doc.id })
            })
            setTodos(todosArray)
        })
        return () => unsub()
    }, [])

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed,
        })
    }
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id))
    }

    if (todos.length < 1 || todos === undefined) {
        return <></>
    }
    return (
        <div className="forms">
            <div className="form-title">Список дел</div>
            {todos.map((todo) => {
                return (
                    <div className="task-content" key={todo.id}>
                        <div className="task-content-title">{todo.title}</div>
                        <pre className="task-content-description">
                            {todo.description}
                        </pre>
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
            })}
        </div>
    )
}
