import React, { Component } from "react"
import "./Home.css"

import FormAdd from "../../ui/app-form-add-task/FormAdd"
import TaskList from "../../ui/app-task-list/TaskList"

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <FormAdd />
                </div>
                <div className="container">
                    <TaskList />
                </div>
            </>
        )
    }
}
