import React , { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import loadable from '@loadable/component';

// import components
import Header from "./Layout/header";

// import context
import TodosContext from "../Context/todos";
import AuthContext from "../Context/auth";

// import reducer
import AppReducer from "../Reducers/appReducer";


// import routs
const Home = loadable (() => import("../Routs/Home"))
const About = loadable(() => import("../Routs/About"))
const Contact = loadable(() => import("../Routs/Contact"))
const Todo = loadable(() => import("../Routs/Todo"))
const NotFound = loadable(() => import("../Routs/NotFound"))




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




    return(
        <Router>
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
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/todos/:todo" component={Todo} />
                                {/*    dynamic route must be the last one route     */}
                                <Route path="/404" component={NotFound} />
                                <Route path="" component={NotFound} />
                            </Switch>
                        </main>
                    </div>
                </TodosContext.Provider>
            </AuthContext.Provider>
        </Router>
        )
}

export default App;
