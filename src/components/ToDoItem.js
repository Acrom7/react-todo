import React from 'react'
import '../sass/todo-item.sass'

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text || '',
            isChecked: false,
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" className='uk-checkbox' />
                <label>{this.state.text} </label>
            </div>
        )
    }
}