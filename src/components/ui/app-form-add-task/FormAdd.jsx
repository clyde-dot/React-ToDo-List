import React, { Component } from "react"
import "./FormAdd.css"
class FormAdd extends Component {
    render() {
        return (
            <div className="form-add">
                <div className="form-add-title">Add task</div>
                <input
                    className="form-add-data form-add-input"
                    type="text"
                    placeholder="Task name"
                    maxLength={100}
                />
                <textarea
                    className="form-add-data form-add-textarea"
                    type="text"
                    placeholder="Description"
                />
                <button className="form-add-button">Add</button>
            </div>
        )
    }
}

export default FormAdd
