import React , { useEffect , useState } from 'react';

import { useParams } from 'react-router-dom';

import todoApi from "../Api/todos";

function Todo(props) {
    const params = useParams();
    const [todo , setTodo] = useState({});
    const [loading , setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos/${params.todo}.json`)
            .then( response => {
                setLoading(false);
                setTodo({ ...response.data , key : params.todo })
            })
            .catch( err => console.log(err) )
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        loading
                            ? <h2>Data is Loading ...</h2>
                            : (
                                <>
                                    <h2> Todo Detail </h2>
                                    <p>{todo.text}</p>
                                    <span className={`badge ${todo.done ? 'badge-success' : 'badge-warning'}`}>{ todo.done ? 'done' : 'undone' }</span>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;