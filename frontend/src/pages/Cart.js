import React from 'react'
import styled from 'styled-components';
import { Button, Col, Row, Container } from 'react-bootstrap';

const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`;

const Cart = () => {
  return (
    <div>
    <Container>
        <Row style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
            <Col style={{justifyContent:'center', display:'flex'}}>
                <Button variant="outline-primary">Continue Shopping</Button>
            </Col>
            <Col style={{justifyContent:'center', display:'flex'}}>
                <Title> Shopping Cart</Title>
            </Col>
            <Col style={{justifyContent:'center', display:'flex'}}>
                <Button variant='outline-success'>Checkout</Button>
            </Col>
        </Row>
    </Container>
    <Container>
    <Row>
        ITEMS
    </Row>
    </Container>
    </div>
  )
}

export default Cart
 