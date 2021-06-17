import React from "react";



function FormAddTodo(props) {


    let formHandler = e => {
        e.preventDefault();
        this.setState(prevState => {
            return {

                todos : [
                    ... prevState.todos,
                    { key : Date.now() , done : false , text : prevState.formInput }
                ],
                formInput : ''
            }
        })
    }

    let inputHandler = e => {
        this.setState( { formInput : e.target.value } )
    }



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