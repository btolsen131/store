import React, {useState, useEffect } from 'react'
import {Button, Row, Col, ListGroup, Image, Card, ListGroupItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'


const Placeorder = () => {
    
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    
    const dispatch = useDispatch()
    
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice  > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = (cart.itemsPrice * 0.07).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const placeOrder = () => {
        console.log('Order Placed')

    }
  
    return (
    <div>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping Address</h2>
                        <p>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}
                            {'   '}
                            {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment</h2>
                        <p>
                            <strong>Method:</strong>
                            {cart.paymentMethod}
                        </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {cart.cartItems.length === 0 
                        ? <Message> Your cart is empty</Message> 
                        :(
                            <ListGroup variant='flush'>
                                {cart.cartItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded/>
                                            </Col>
                                            <Col>
                                                <Link to={`/Item/${item.product}`}> {item.name}</Link>
                                            </Col>
                                            <Col md={4}>
                                                {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                            
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}

                            </ListGroup>
                        )}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h2>Order Summary</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Item:</Col>
                                <Col>${cart.itemsPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Shipping:</Col>
                                <Col>${cart.shippingPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Tax:</Col>
                                <Col>${cart.taxPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Total:</Col>
                                <Col>${cart.totalPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type='button' className='btn-block' 
                            disabled={cart.cartItems === 0} onClick={placeOrder}> 
                            Place Order
                            </Button>
                        </ListGroupItem>

                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default Placeorder