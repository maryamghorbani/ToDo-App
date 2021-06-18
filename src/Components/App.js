import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Layout/header";
import FormAddTodo from "./Todo/FormAddTodo";
import TodoList from "./Todo/TodoList";


class App extends Component {
    state = {
        todos : []
    }

    addTodo(text) {
        this.setState(prevState => {
            return {

                todos : [
                    ... prevState.todos,
                    { key : Date.now() , done : false , text }
                ]
            }
        })
    }

    deleteTodo(key) {
        this.setState(prevSate => {
            return {
                todos : prevSate.todos.filter(item => item.key !== key)
            }
        })
    }

    toggleTodo(key) {
        let { todos } = this.state;
        let item = todos.find(item => item.key == key)
        item.done = ! item.done;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos: [
                ... newTodos,
                item
            ]
        })
    }

    editTodo(key , text) {
        let { todos } = this.state;
        let item = todos.find(item => item.key == key)
        item.text = text;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos: [
                ... newTodos,
                item
            ]
        })
    }

    render() {

        return(
            <div className="App">
                <Header />
                <main>
                    <section className="jumbotron">
                        <div className="container d-flex flex-column align-items-center">
                            <h1 className="jumbotron-heading">Welcome!</h1>
                            <p className="lead text-muted">To get started, add some items to your list:</p>
                            <FormAddTodo add={this.addTodo.bind(this)} />
                        </div>
                    </section>
                    <div className="todosList">
                        <div className="container">
                            <div className="d-flex flex-column align-items-center ">
                                <TodoList todos={this.state.todos}
                                          delete={this.deleteTodo.bind(this)}
                                          done={this.toggleTodo.bind(this)}
                                          edit={this.editTodo.bind(this)}
                                />
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
