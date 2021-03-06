import React , { useEffect , useState } from 'react';

import { useParams , useHistory } from 'react-router-dom';

import todoApi from "../Api/todos";

function Todo(props) {
    const params = useParams();
    const [todo , setTodo] = useState({});
    const [loading , setLoading] = useState();
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        todoApi.get(`/todos/${params.todo}.json`)
            .then( response => {
                setLoading(false);
                if (response.data) {
                    setTodo({ ...response.data , key : params.todo })
                } else {
                    // redirect to 404 page
                    history.push('/404')
                }

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
                                    <h4> Todo Detail </h4>
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