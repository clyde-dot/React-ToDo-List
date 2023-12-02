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
    if (todos.length < 1 || todos === undefined) {
        return <></>
    }
    return (
        <div className="forms">
            <div className="form-title">Список дел</div>
            {todos.map((todo) => {
                return (
                    <Accordion
                        todo={todo}
                        toggleComplete={toggleComplete}
                        handleDelete={handleDelete}
                    />
                )
            })}
        </div>
    )
}
