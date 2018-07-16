import React, {Component} from 'react';
import "./Task5.css"

import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

export default class Task5 extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {item:'ReactJS',isDone:false},
                {item:'Redux',isDone:false},
                {item:'JavaScript',isDone:true},
                {item:'jQuery',isDone:true},
                {item:'Git',isDone:true}
                ]
        };

        this.updateItems = this.updateItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    updateItems(newItem){
        let item = {item:newItem,isDone:false};
        let allItems = this.state.items.concat([item]);
        this.setState({
            items: allItems
        });
    }

    deleteItem(index){
        let newData = this.state.items.slice(); //copy array
        newData.splice(index, 1); //remove element
        this.setState({
            items: newData
        });
    }

    render(){
        return (
            <div className="task5container">
                <h1>Задание 5</h1>
                <div className="task5">
                    <h1 style={{fontFamily: "sans-serif"}}>Todo List</h1>
                    <TodoForm onFormSubmit={this.updateItems} />
                    <TodoList items={this.state.items} onDelete={this.deleteItem} />
                </div>
            </div>
        );
    }
}










