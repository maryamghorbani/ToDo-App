function AppReducer(prevState , action) {
    console.log(prevState,action);
    return{};
}




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