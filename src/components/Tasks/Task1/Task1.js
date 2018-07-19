import React, { Component } from 'react';
import "./Task1.css";
import pic from './photo.png'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Clipboard from 'react-clipboard.js';
import {Panel} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';

export default class Task1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            tp: "Скопировать"
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
    }

    handleClick() {
        this.setState({
            tp:"Скопировано!"
        })
    }

    handleMouse() {
        this.setState({
            tp:"Скопировать"
        })
    }



    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                {this.state.tp}
            </Tooltip>
        );

        return(
            <div className="task1container">
                <Row>
                    <Col sm={9}>
                        <h1>Задание 1</h1>
                        <div>
                            <div className="left">
                                <h4>
                                    Привет! Меня зовут Марк и я <b>front-end</b> разработчик. <br/><br/>
                                    Занимаюсь веб-разработкой на языке <b>JavaScript</b>, знаком с системами <b>контроля версий</b>.<br/>
                                    В данный момент изучаю <b>React</b> и в дальнейшем планирую изучать <b>Redux</b>. <br/>
                                    Есть опыт с <b>адаптивной</b> и <b>кроссбраузерной</b> версткой (эта страница, кстати, является примером).<br/><br/>
                                    Примеры всех работ можете посмотреть на <a href="https://github.com/Lumen27/">Github</a> и на <a
                                    href="https://codepen.io/Lumen27/">Codepen</a>. <br/><br/>
                                    Свободно владею английским языком.
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="right">
                            <img src={pic} alt="" width="100%" height="auto" />
                            <div className="socLinks">
                                <Panel>
                                    <Panel.Body>
                                        <i className="mdi mdi-skype mdi-18px"></i> mitin.mark@yandex.ru
                                            <Clipboard data-clipboard-text="mitin.mark@yandex.ru" className="clip">
                                                <OverlayTrigger  placement="top" overlay={tooltip} trigger="hover" onClick={this.handleClick} onMouseLeave={this.handleMouse}>
                                                    <i className="mdi mdi-content-copy mdi-18px" onMouseLeave={this.handleMouse}></i>
                                                </OverlayTrigger>
                                            </Clipboard>
                                    </Panel.Body>

                                    <Panel.Body>
                                        <i className="mdi mdi-phone mdi-18px"></i> +7 (900) 652-33-52
                                            <Clipboard data-clipboard-text="+79006523352" className="clip">
                                                <OverlayTrigger  placement="top" overlay={tooltip} trigger="hover" onClick={this.handleClick} onMouseLeave={this.handleMouse}>
                                                    <i className="mdi mdi-content-copy mdi-18px" onMouseLeave={this.handleMouse}></i>
                                                </OverlayTrigger>
                                            </Clipboard>
                                    </Panel.Body>

                                    <Panel.Body>
                                        <i className="mdi mdi-vk mdi-18px"></i> <a href="https://vk.com/stonedcookie">vk.com/stonedcookie</a>
                                            <Clipboard data-clipboard-text="https://vk.com/stonedcookie" className="clip">
                                                <OverlayTrigger  placement="top" overlay={tooltip} trigger="hover" onClick={this.handleClick} onMouseLeave={this.handleMouse}>
                                                    <i className="mdi mdi-content-copy mdi-18px" onMouseLeave={this.handleMouse}></i>
                                                </OverlayTrigger>
                                            </Clipboard>
                                    </Panel.Body>

                                    <Panel.Body>
                                        <i className="mdi mdi-github-circle mdi-18px"></i> <a href="https://codepen.io/Lumen27/">github.com/Lumen27</a>
                                            <Clipboard data-clipboard-text="https://github.com/Lumen27/" className="clip">
                                                <OverlayTrigger  placement="top" overlay={tooltip} trigger="hover" onClick={this.handleClick} onMouseLeave={this.handleMouse}>
                                                    <i className="mdi mdi-content-copy mdi-18px" onMouseLeave={this.handleMouse}></i>
                                                </OverlayTrigger>
                                            </Clipboard>
                                    </Panel.Body>

                                    <Panel.Body>
                                        <i className="mdi mdi-codepen mdi-18px"></i> <a href="https://codepen.io/Lumen27/">codepen.io/Lumen27</a>
                                            <Clipboard data-clipboard-text="https://codepen.io/Lumen27/" className="clip">
                                                <OverlayTrigger  placement="top" overlay={tooltip} trigger="hover" onClick={this.handleClick}>
                                                    <i className="mdi mdi-content-copy mdi-18px" onMouseLeave={this.handleMouse}></i>
                                                </OverlayTrigger>
                                            </Clipboard>
                                    </Panel.Body>
                                </Panel>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}