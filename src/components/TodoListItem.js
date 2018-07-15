import React, {Component} from 'react';

export default class TodoListItem extends Component {

    constructor(props){
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.RemoveHandler = this.RemoveHandler.bind(this);
    }

    changeHandler(e){
        this.setState({
            value: e.target.checked
        });
        this.props.children.isDone = e.target.checked;
    }

    RemoveHandler(){
        this.props.onRemove(this.props.value);
    }

    render(){
        let _style = "line-through";
        if(!this.props.children.isDone)
            _style ="none";
        return (
            <li data-id={this.props.value}
                key={this.props.value}><button type="button" className="close" aria-hidden="true" onClick={this.RemoveHandler}>&times;</button><input type="checkbox" onChange={this.changeHandler} defaultChecked={this.props.children.isDone} /><span style={{"textDecoration": _style}}>{this.props.children.item}</span></li>
        );
    }
}
