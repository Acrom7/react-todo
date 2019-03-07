import React from 'react'
import ToDoItem from './ToDoItem'
import '../sass/new-item.sass'

export default class NewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'Новый пункт',
            text: '',
            count: 0,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(<ToDoItem text={this.state.text} key={this.state.count}/>)
        this.setState({
            text: '',
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <form className={'new-item'} onSubmit={this.handleSubmit} >
                <label
                    htmlFor={'newItem'}
                    data-uk-icon="icon: plus; ratio: 1"
                />
                <input
                    className="uk-input"
                    placeholder={this.state.placeholder}
                    type='text'
                    id={'newItem'}
                    autoComplete={'off'}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </form>
        );
    }
}