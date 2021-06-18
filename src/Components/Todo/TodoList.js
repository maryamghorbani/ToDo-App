import React from 'react';
import Todo from "./Todo";

function TodoList(props) {
    return (
        <>
            <nav className="col-6 mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link font-weight-bold ${ !statusDone ? 'active' : '' }`}
                       id="nav-home-tab" onClick={() => this.setState({ statusDone: false })}>undone <span className="badge badge-secondary">{todos.filter(item => item.done == false).length}</span></a>
                    <a className={`nav-item nav-link active font-weight-bold ${ statusDone ? 'active' : '' }`}
                       id="nav-profile-tab" onClick={() => this.setState({ statusDone: true })}>done <span className="badge badge-success">{todos.filter(item => item.done == true).length}</span></a>
                </div>
            </nav>
            {
                filterTodos == 0
                    ? <p>There isn't any todos!</p>
                    : filterTodos.map(item => <Todo key={item.key}
                                                    item={item}
                                                    delete={this.deleteTodo.bind(this)}
                                                    done={this.toggleTodo.bind(this)}
                                                    edit={this.editTodo.bind(this)}
                    />
                    )
            }
        </>
    )
}

export default TodoList;