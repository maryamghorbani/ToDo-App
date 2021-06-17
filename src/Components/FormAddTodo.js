import React from "react";



function FormAddTodo(props) {
    return (
        <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.formInput} onChange={this.inputHandler.bind(this)}/>
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}

export default FormAddTodo;