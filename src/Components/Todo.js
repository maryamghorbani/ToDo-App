import React, {useState} from "react";
import EditTodo from "./EditTodo";


function Todo (props) {

    const { item } = props;

    const [ edit , setEdit ] = useState(false)

    return (
        <div>
            {
                edit == false
                ? (
                        <div className="col-6 mb-2">
                            <div
                                className="d-flex justify-content-between align-items-center border rounded p-3">
                                <div>
                                    {item.text}
                                </div>
                                <div>
                                    <button type="button" className={`btn btn-sm mr-1 ${item.done ? 'btn-warning' : 'btn-success' }`} onClick={()=>props.done(props.item.key)}>{props.item.done ? 'undone' : 'done'}</button>
                                    <button type="button" className="btn btn-info btn-sm mr-1" onClick={() => setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>props.delete(props.item.key)}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo />
            }
        </div>

    )
}

export default Todo;