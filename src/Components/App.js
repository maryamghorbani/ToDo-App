import React , { useReducer , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import todoApi from "../Api/todos";

// import components
import Header from "./Layout/header";
import FormAddTodo from "./Todo/FormAddTodo";
import TodoList from "./Todo/TodoList";

// import context
import TodosContext from "../Context/todos";
import AuthContext from "../Context/auth";

// import reducer
import AppReducer from "../Reducers/appReducer";





// class App extends Component {
//     state = {
//         todos : [],
//         authenticated : false
//     }
//
//     addTodo(text) {
//         this.setState(prevState => {
//             return {
//
//                 todos : [
//                     ... prevState.todos,
//                     { key : Date.now() , done : false , text }
//                 ]
//             }
//         })
//     }
//
//     deleteTodo(key) {
//         this.setState(prevSate => {
//             return {
//                 todos : prevSate.todos.filter(item => item.key !== key)
//             }
//         })
//     }
//
//     toggleTodo(key) {
//         let { todos } = this.state;
//         let item = todos.find(item => item.key == key)
//         item.done = ! item.done;
//
//         let newTodos = todos.filter(item => item.key !== key)
//
//         this.setState({
//             todos: [
//                 ... newTodos,
//                 item
//             ]
//         })
//     }
//
//     editTodo(key , text) {
//         let { todos } = this.state;
//         let item = todos.find(item => item.key == key)
//         item.text = text;
//
//         let newTodos = todos.filter(item => item.key !== key)
//
//         this.setState({
//             todos: [
//                 ... newTodos,
//                 item
//             ]
//         })
//     }
//
//     render() {
//
//         return(
//
//             <AuthContext.Provider value={{
//                 authenticated: this.state.authenticated,
//                 login : () => { this.setState({ authenticated : true }) },
//                 logout : () => { this.setState({ authenticated : false }) }
//             }
//             }>
//                 <TodosContext.Provider value={{
//                     todos : this.state.todos,
//                     add : this.addTodo.bind(this),
//                     done : this.toggleTodo.bind(this),
//                     delete : this.deleteTodo.bind(this),
//                     edit : this.editTodo.bind(this)
//                 }}>
//                     <div className="App">
//                         <Header />
//                         <main>
//                             <section className="jumbotron">
//                                 <div className="container d-flex flex-column align-items-center">
//                                     <h1 className="jumbotron-heading">Welcome!</h1>
//                                     <p className="lead text-muted">To get started, add some items to your list:</p>
//                                     <FormAddTodo />
//                                 </div>
//                             </section>
//                             <div className="todosList">
//                                 <div className="container">
//                                     <div className="d-flex flex-column align-items-center ">
//                                         <TodoList />
//                                     </div>
//
//                                 </div>
//                             </div>
//                         </main>
//                     </div>
//                 </TodosContext.Provider>
//             </AuthContext.Provider>
//
//         )
//     }
// }


function App() {


    const [state , dispatch] = useReducer( AppReducer , {
        todos : [],
        authenticated : false
    } )


    useEffect(() => {
        todoApi.get(`/todos.json`)
            .then( response => jsonHandler(response.data) )
            .catch( err => {} );
    },[] ) // run a function just 1 bar


    let jsonHandler = (data) => {
        let todos = Object
                        .entries(data)
                        .map(([key,value]) => {
                            return {
                                ...value,
                                key
                            }
                        } )
        dispatch({ type : 'init_todo' , payload : { todos }})
    }




    return(
                <AuthContext.Provider value={{
                    authenticated : state.authenticated,
                    dispatch
                }}>
                <TodosContext.Provider value={{
                    todos : state.todos,
                    dispatch
                }}>
                    <div className="App">
                        <Header />
                        <main>
                            <section className="jumbotron">
                                <div className="container d-flex flex-column align-items-center">
                                    <h1 className="jumbotron-heading">Welcome!</h1>
                                    <p className="lead text-muted">To get started, add some items to your list:</p>
                                    <FormAddTodo />
                                </div>
                            </section>
                            <div className="todosList">
                                <div className="container">
                                    <div className="d-flex flex-column align-items-center ">
                                        <TodoList />
                                    </div>

                                </div>
                            </div>
                        </main>
                    </div>
                </TodosContext.Provider>
            </AuthContext.Provider>

        )
}

export default App;
