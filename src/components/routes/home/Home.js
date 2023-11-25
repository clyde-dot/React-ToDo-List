import React, { Component } from "react"
import "./Home.css"

import FormAdd from "../../ui/app-form-add-task/FormAdd"

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <FormAdd />
            </div>
        )
    }
}
