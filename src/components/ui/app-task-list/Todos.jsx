import React, { useState, useEffect } from "react"

import {
    collection,
    query,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore"
import { db } from "../../../firebase"
import "./Todos.css"
import Accordion from "../Accordion/Accordion"

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

    return (
        <div className="todos">
            <div className="todos-title">Todo List</div>

            {todos.length < 1 || todos === undefined ? (
                <div className="todos-zero">There's nothing here yet...</div>
            ) : (
                <ul className="accordion">
                    {todos.map((todo, id) => {
                        return (
                            <Accordion
                                id={id}
                                todo={todo}
                                toggleComplete={toggleComplete}
                                handleDelete={handleDelete}
                            />
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
