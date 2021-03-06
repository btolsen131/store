import React, { useEffect, useState } from 'react'
import { Row, Col, ListGroup, Image, Card, ListGroupItem} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import { getOrderDetails, payOrder } from '../actions/orderActions'
import Loader from '../components/Loader';
import {PayPalButton} from 'react-paypal-button-v2'
import {ORDER_PAY_RESET} from '../constants/orderConstants';

const Order = ({match}) => {

    const { id } =useParams()

    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails


    const orderPay = useSelector(state => state.orderPay)
    const { loading:loadingPay, success:successPay} = orderPay

    const dispatch = useDispatch()


    // client ID AZwNgECe_auwLv5Yoq7dipc2g1UKvZx7Kn3kcZ4-kyMyfBKdAm8wNsC24rNMFbgJxDAoN1v4WiJFksEj

    if(!loading && !error){
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }

    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AZwNgECe_auwLv5Yoq7dipc2g1UKvZx7Kn3kcZ4-kyMyfBKdAm8wNsC24rNMFbgJxDAoN1v4WiJFksEj&currency=USD'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }
    useEffect(()=>{
        if(!order || successPay || order._id !== Number(id)){
        dispatch({type:ORDER_PAY_RESET})
       dispatch(getOrderDetails(id))
    }else if (!order.isPaid){
        if(!window.paypal){
            addPayPalScript()
        } else{
            setSdkReady(true)
        }
    }

    }, [order, id, dispatch, successPay])

    const successPaymentHandler = (paymentResult) =>{
        dispatch(payOrder(id, paymentResult))
    }

    return loading ? (
        <Loader/>)
        :error ? (
            <Message variant='danger'>{error}</Message> )
        :(
    <div>
        <h1>Order: {order._id} </h1>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping Address</h2>
                        <p><strong>Name: </strong>{order.user.name}</p>
                        <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                        <p>
                            {order.shippingAddress.address}, {order.shippingAddress.city}
                            {'   '}
                            {order.shippingAddress.postalCode}, {order.shippingAddress.country}

                        </p>
                        {order.isDelivered ? (
                            <Message variant='success'>Delivered on {order.deliveredAt}</Message>
                        ):(
                            <Message variant='warning'>Not Delivered Yet</Message>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Payment</h2>
                        <p>
                            <strong>Method:</strong>
                            {order.paymentMethod}
                        </p>
                        {order.isPaid ? (
                            <Message variant='success'>Paid on {order.paidAt}</Message>
                        ):(
                            <Message variant='warning'>Not Paid Yet</Message>
                        )}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {order.orderItems.length === 0
                        ? <Message> Your order is empty</Message>
                        :(
                            <ListGroup variant='flush'>
                                {order.orderItems.map((item, index) => (
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
                                <Col>${order.itemsPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Shipping:</Col>
                                <Col>${order.shippingPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Tax:</Col>
                                <Col>${order.taxPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Total:</Col>
                                <Col>${order.totalPrice}</Col>
                            </Row>
                        </ListGroupItem>
                        {!order.isPaid && (
                        <ListGroupItem>
                            {loadingPay && <Loader/>}
                            {!sdkReady ? (
                                <Loader/>
                            ) : (
                                <PayPalButton
                                    amount={order.totalPrice}
                                    onSuccess={successPaymentHandler}
                                    />
                            )}
                        </ListGroupItem>
                        )}
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default Order
