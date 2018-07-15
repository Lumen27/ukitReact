import React, {Component} from 'react';
import "./Task2.css";

import {Panel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

export default class Task2 extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            text: "Другие",
            toggle: "fa fa-angle-down",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let angle = this.state.toggle;

        if(angle === "fa fa-angle-down") {
            this.setState({
                open: !this.state.open,
                text: "Скрыть",
                toggle: "fa fa-angle-up"
            })
        } else {

            this.setState({
                open: !this.state.open,
                text: "Другие",
                toggle: "fa fa-angle-down"
            })
        }
    }

    render() {
        return(
            <div className="task2">
                <h2 style={{display: "inline-block"}}>Задание 2</h2>
                <Panel className="task2container">
                    <Panel.Body>
                        <Row>
                            <Col>
                                <h3>Регистрация</h3>
                                <br/>

                                <Button className="vkBtn"><h4>Регистрация из Вконтакте</h4></Button>
                                <br/>
                                <br/>
                                <Button className="fbBtn"><h4>Регистрация из Facebook</h4></Button>
                                <div>
                                    <Collapse in={this.state.open}>
                                        <div>
                                            <br/>
                                            <Button className="gpBtn"><h4>Регистрация из Google Plus</h4></Button>
                                            <br/>
                                            <br/>
                                            <Button className="yaBtn"><h4>Регистрация из </h4><h4 style={{color: "#da3d2c"}}>Яндекс</h4></Button>
                                        </div>
                                    </Collapse>
                                    <h4 className="accord" onClick={this.handleClick}>
                                        {this.state.text} <i className={this.state.toggle}></i>
                                    </h4>
                                </div>

                                <p style={{color: "#bdc2c9"}}>или</p>

                                <form style={{width: "284px", margin: "auto"}}>
                                    <FormGroup>
                                        <FormControl
                                        style={{marginBottom: "10px"}}
                                        type="text"
                                        placeholder="Ваш логин и E-mail"
                                    />
                                        <FormControl
                                            type="text"
                                            placeholder="Пароль"
                                        />
                                    </FormGroup>
                                </form>

                                <div style={{width: "284px", margin: "auto"}}>
                                    <div className="pretty p-icon p-bigger" style={{display: "inline", float: "left"}}>
                                        <input type="checkbox"/>
                                        <div className="state p-primary-o">
                                            <i className="icon mdi mdi-check mdi-18px"  style={{color: "black"}}></i>
                                            <label>Запомнить меня</label>
                                        </div>
                                    </div>
                                    <a href="#" style={{float: "right", marginTop: "-3px"}}>Забыли пароль?</a>
                                </div>
                                <br/>
                                <br/>

                                <Button bsStyle="success" className="register"><h4>Зарегестрироваться</h4></Button>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}