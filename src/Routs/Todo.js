import React from 'react';

class Todo extends React.Component {
    render() {
        console.log(this.props.match.params);
        return (
            <h2> Todo Details </h2>
        )
    }
}

export default Todo;