import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import "./Navigation.css";
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";
import Task5 from "./Task5";
import ScrollIntoView from 'react-scroll-into-view'
import {Panel} from 'react-bootstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state ={
            active: 1,
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    componentDidMount() {
        this.handleToggle()
    }

    toggleClass(x) {
        this.setState({ active: x });
    };

    handleToggle() {
        let x = document.getElementById("hidden");
        if (x.style.display === "none") {
            x.style.display = "inherit";
        } else {
            x.style.display = "none";
        }
    }

    render() {
        return(
            <Grid fluid>
                <Row>
                    <Col sm={2} className="menu">
                        <div>
                            <h2>Меню</h2>
                            <ScrollIntoView selector="#task1">
                                <Panel className={this.state.active === 1 ? "links-active" : "links"}>
                                    <Panel.Body onClick={() => {this.toggleClass(1)}}>Задание 1</Panel.Body>
                                </Panel>
                            </ScrollIntoView>

                            <ScrollIntoView selector="#task2">
                                <Panel className={this.state.active === 2 ? "links-active" : "links" }>
                                    <Panel.Body onClick={() => {this.toggleClass(2)}}>Задание 2</Panel.Body>
                                </Panel>
                            </ScrollIntoView>

                            <ScrollIntoView selector="#task3">
                                <Panel className={this.state.active === 3 ? "links-active" : "links" }>
                                    <Panel.Body onClick={() => {this.toggleClass(3)}}>Задание 3</Panel.Body>
                                </Panel>
                            </ScrollIntoView>

                            <ScrollIntoView selector="#task4">
                                <Panel className={this.state.active === 4 ? "links-active" : "links" }>
                                    <Panel.Body onClick={() => {this.toggleClass(4)}}>Задание 4</Panel.Body>
                                </Panel>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#task5">
                                <Panel className={this.state.active === 5 ? "links-active" : "links" }>
                                    <Panel.Body onClick={() => {this.toggleClass(5)}}>Задание 5</Panel.Body>
                                </Panel>
                            </ScrollIntoView>
                        </div>
                    </Col>
                    <Col sm={10} className="tasks">

                        <div className="hMenu">
                            <div className="oMenu" onClick={this.handleToggle}>
                                <i className="icon mdi mdi-menu .mdi-48px menuIcon"></i>
                            </div>
                            <div className="lMenu" id="hidden">
                                <ScrollIntoView selector="#task1">
                                    <p className="links">Задание 1</p>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#task2">
                                    <p className="links">Задание 2</p>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#task3">
                                    <p className="links">Задание 3</p>
                                </ScrollIntoView>

                                <ScrollIntoView selector="#task4">
                                    <p className="links">Задание 4</p>
                                </ScrollIntoView>
                                <ScrollIntoView selector="#task5">
                                    <p className="links">Задание 5</p>
                                </ScrollIntoView>
                            </div>
                        </div>

                        <div id="task1"><Task1/></div>
                        <div id="task2"><Task2/></div>
                        <div id="task3"><Task3/></div>
                        <div id="task4"><Task4/></div>
                        <div id="task5"><Task5/></div>
                    </Col>
                </Row>
            </Grid>
        )
    }
};