import React from 'react'
import NewItem from './NewItem'
import ToDoItem from "./ToDoItem"
import '../sass/todo-list.sass'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            checkedItems: [],
        }
    }

    addItem = async item => {
        await this.setState({
            items: this.state.items.concat(item),
        })
        localStorage.setItem('items', JSON.stringify(this.state.items))
    }

    componentWillMount() {
        localStorage.getItem('items') && this.setState({
            items: JSON.parse(localStorage.getItem('items')),
        })
    }

    updateLocalStorage = (item) => {
        console.log('LocalStorage is updated')
        this.setState({
            items: this.state.items.map(el => {
                if (el.id !== item.state.id) {
                    return el
                } else {
                    return Object.assign(el, {ischecked: !el.ischecked})
                }
            })
        })
        localStorage.setItem('items', JSON.stringify(this.state.items))
    }

    render() {
        return (
            <div className="todo-list">
                {this.state.items.filter(el => !el.ischecked).map(el => {
                    return <ToDoItem key={el.id} id={el.id} text={el.text} ischecked={el.ischecked}
                                     updateLocalStorage={this.updateLocalStorage}/>
                })}

                {this.state.items.filter(el => el.ischecked).map(el => {
                    return <ToDoItem key={el.id} id={el.id} text={el.text} ischecked={el.ischecked}
                                     updateLocalStorage={this.updateLocalStorage}/>
                })}
                <NewItem addItem={this.addItem}/>
            </div>
        )
    }
}