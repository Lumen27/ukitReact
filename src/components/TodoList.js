import React, {Component} from 'react';
import TodoListItem from "./TodoListItem"

export default class TodoList extends Component {

    constructor(props){
        super(props);

        this.Remove = this.Remove.bind(this);
    }



    Remove(e){
        this.props.onDelete(e);
    }

    render() {
        let createItem = function(itemText, i) {
            return (
                <TodoListItem key={i} value={i} onRemove = {this.Remove}>{itemText}</TodoListItem>
            );
        };
        return <ul>{this.props.items.map(createItem, this)}</ul>;
    }
}