import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

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
            <li data-id={this.props.value} key={this.props.value}>
                <Panel className="panelContainer">
                    <Panel.Body>
                        <button type="button" className="close" aria-hidden="true" onClick={this.RemoveHandler}>&times;</button>
                        <div className="pretty p-icon p-bigger" style={{display: "inline", float: "left"}}>
                            <input type="checkbox" onChange={this.changeHandler} defaultChecked={this.props.children.isDone} />
                            <div className="state p-primary-o">
                                <i className="icon mdi mdi-check mdi-18px"  style={{color: "black"}}></i>
                                <label></label>
                            </div>
                        </div>
                        <span style={{"textDecoration": _style}} className="listItem">{this.props.children.item}</span>
                    </Panel.Body>
                </Panel>

            </li>
        );
    }
}
