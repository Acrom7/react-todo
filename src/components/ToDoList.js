import React from 'react'
import NewItem from './NewItem'
import '../sass/todo-list.sass'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countOfItems: 0,
            items: [],
        }

        this.addItem = this.addItem.bind(this)
    }

    addItem = item => {
        this.setState({
            items: [...this.state.items, item],
            countOfItems: this.state.countOfItems + 1,
        })
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.items}
                <NewItem addItem={this.addItem}/>
            </div>
        );
    }
}