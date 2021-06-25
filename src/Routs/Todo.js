import React from 'react';

function Todo() {
    console.log(this.props.match.params);
    return (
        <h2> Todo Details </h2>
    )
}

export default Todo;