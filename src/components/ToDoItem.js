import React from 'react'
import '../sass/todo-item.sass'

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: this.props.text || '',
            ischecked: this.props.ischecked || false,
            id: this.props.id
        }
    }

    handleChange = async (event) => {
        this.props.updateLocalStorage(this)
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" className='uk-checkbox' id={this.props.id} defaultChecked={this.props.ischecked}
                       onChange={this.handleChange}/>
                <label htmlFor={this.props.id}>{this.state.text}</label>
            </div>
        )
    }
}