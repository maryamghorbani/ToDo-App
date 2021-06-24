import React, { useState , useContext } from "react";
import EditTodo from "./EditTodo";
import TodosContext from "../../Context/todos";
import todoApi from "../../Api/todos";


function Todo (props) {

    const { item } = props;

    const [ loading , setLoading ] = useState(false);


    const [ edit , setEdit ] = useState(false);
    const todosContext = useContext(TodosContext);

    let editHandler = text => {
        setLoading(true);
        todoApi.put(`/todos/${item.key}.json` , { done : item.done , text })
            .then( response => {
                todosContext.dispatch({ type : 'edit_todo' , payload : { key : item.key , text}})
            })
            .catch( err => console.log(err));
        setEdit(false);
    }


    let doneHandler = e => {
        setLoading(true);
        todoApi.put(`/todos/${item.key}.json` , { done : ! item.done , text : item.text })
            .then( response => {
                todosContext.dispatch({ type : 'toggle_todo' , payload : { key : item.key}})
            })
            .catch( err => console.log(err));
    }


    let deleteHandler = e => {
        setLoading(true);
        //ajax
        todoApi.delete(`/todos/${item.key}.json`)
            .then(response => {
                todosContext.dispatch({ type : 'delete_todo' , payload : { key : item.key } })
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <>
            {
                ! edit
                ? (
                        <div className="col-6 mb-2">
                            <div
                                className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {item.text}
                                </div>
                                <div>
                                    {
                                        loading
                                            ? <h2>Loading data ...</h2>
                                            : (
                                                <button type="button" className={`btn btn-sm mr-1 ${ !item.done ? 'btn-success' : 'btn-warning'}`} onClick={doneHandler}>{ item.done ? 'undone' : 'done'}</button>
                                            )
                                    }
                                    {
                                        loading
                                            ? <h2>Loading data ...</h2>
                                            : (
                                                <button type="button" className="btn btn-info btn-sm mr-1" onClick={() => setEdit(true)}>edit</button>
                                            )
                                    }
                                    {
                                        loading
                                            ? <h2>Loading data ...</h2>
                                            : (
                                                <button type="button" className="btn btn-danger btn-sm" onClick={deleteHandler}>delete</button>
                                            )
                                    }


                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler} />
            }
        </>

    )
}

export default Todo;