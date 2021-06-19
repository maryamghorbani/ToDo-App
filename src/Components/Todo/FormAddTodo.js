import React from "react";
import TodosContext from "../../Context/todos";


class FormAddTodo extends React.Component {

    state = { text : '' }
    static contextType = TodosContext;

    formHandler(e) {
        e.preventDefault();
        this.context.add(this.state.text);;
        this.setState({ text : '' })
    }

    inputHandler(e) { this.setState({ text : e.target.value }) }

    render() {
        return (
            <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                <div className="form-group">
                    <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={this.state.text} onChange={this.inputHandler.bind(this)}/>
                    <button type="submit" className="btn btn-primary">add</button>
                </div>
            </form>
        )
    }
}

export default FormAddTodo;