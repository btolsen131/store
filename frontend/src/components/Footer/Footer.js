import React from "react"
import { BsLinkedin, BsGithub, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import {NavLink} from './FooterElements'

const Footer = () =>{
    return (
       <div className="main-footer" style={{backgroundColor:'lightGray', paddingTop:'2%'}}>
        <Container >
            <Row>
                <Col md={3} sm={6}>
                    <h4 className="text-center text-decoration-underline">About Us</h4>
                        <ListGroup variant='flush' style={{backgroundColor:'(rgb(0,0,0,0%)'}}>
                            <ListGroup.Item action ><NavLink to="/about">About</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="#">Mission</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="https://btolsen131.github.io/portfolio_website/assets/other_htmls/resumePage.html">Hire Me</NavLink></ListGroup.Item>
                        </ListGroup>
                </Col>
                
                <Col md={3} sm={6}>
                    <h4 className="text-center text-decoration-underline">Social</h4>
                        <ListGroup variant='flush'>
                            <ListGroup.Item action ><NavLink to="https://www.linkedin.com/in/briantolsen/"><BsLinkedin style={{marginRight:'2px'}} /> LinkedIn</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="https://github.com/btolsen131"><BsGithub style={{marginRight:'2px'}} /> Github</NavLink></ListGroup.Item>
                            <ListGroup.Item action ><NavLink to="https://btolsen131.github.io/portfolio_website/"><BsReverseLayoutTextWindowReverse style={{marginRight:'2px'}} /> Portfolio</NavLink></ListGroup.Item>
                        </ListGroup>
                </Col>

                
                <Col md={6} style={{alignItems:'center'}}>
                <Container >
                <h5 className="text-uppercase">Brian's Shop</h5>
                <p>Where you can buy everything to be like Brian.</p>
                </Container>
                </Col>
            </Row>
            <hr />
                <Col>
                    <p className="text-muted text-sm text-center">&copy; 2022 Brian's Shop LLC</p>
                </Col>
            <Row>

            </Row>
        </Container>
        </div>

    )
}

export default Footer