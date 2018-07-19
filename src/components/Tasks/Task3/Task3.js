import React, {Component} from 'react';
import "./Task3.css";
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';



export default class Task3 extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                Чтобы войти в систему кликните на кнопку.
            </Tooltip>
        );

        return(
            <div className="task3Container">
                <h2 style={{display: "inline-block"}}>Задание 3</h2>
                <div className="t3cont">
                    <Row className="tooltips">
                        <Col sm={2} className="col-tool">
                            <Tooltip placement="left" className="in" id="tooltip-left">
                                Tooltip on the left
                            </Tooltip>
                        </Col>

                        <Col sm={2} className="col-tool">
                            <Tooltip placement="top" className="in" id="tooltip-top"  positionTop="-2px">
                                Tooltip on the top
                            </Tooltip>
                        </Col>

                        <Col sm={2} className="col-tool">
                            <Tooltip placement="bottom" className="in" id="tooltip-bottom"  positionTop="-8px">
                                Tooltip on the bottom
                            </Tooltip>
                        </Col>

                        <Col sm={2} className="col-tool">
                            <Tooltip placement="right" className="in" id="tooltip-right"  positionTop="-20px">
                                Tooltip on the right
                            </Tooltip>
                        </Col>
                    </Row>

                    <Row className="login">
                        <Col sm={7} style={{textAlign: "center"}}>
                            <OverlayTrigger  placement="top" overlay={tooltip} delayShow={300} delayHide={150}>
                                <Button>Войти в систему</Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
};