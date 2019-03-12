import React from 'react'
import '../sass/new-item.sass'

export default class NewItem extends React.Component {
    state = {
        placeholder: 'Новый пункт',
        text: '',
        count: parseInt(localStorage.getItem('count'), 10) || 0,
    }

    handleChange = event => {
        this.setState({text: event.target.value})
    }

    handleSubmit = async event => {
        event.preventDefault()
        this.props.addItem({
            text: this.state.text,
            id: this.state.count,
            ischecked: false,
        })
        await this.setState({
            text: '',
            count: this.state.count + 1
        })
        localStorage.setItem('count', this.state.count)
    }

    render() {
        return (
            <form className={'new-item'} onSubmit={this.handleSubmit}>
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