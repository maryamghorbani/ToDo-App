import React from "react";


function Todo (props) {
    return (
        <div className="col-6 mb-2">
            <div
                className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {props.item.text}
                </div>
                <div>
                    <button type="button" className="btn btn-success btn-sm mr-1" onClick={()=>props.done(props.item.key)}>done</button>
                    <button type="button" className="btn btn-info btn-sm mr-1">edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>props.delete(props.item.key)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;