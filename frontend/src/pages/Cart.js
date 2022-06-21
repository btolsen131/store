import React, {useEffect} from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row, ListGroup, Image, Form, Card } from 'react-bootstrap';
import  Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { BsTrash } from 'react-icons/bs';

const Cart = ({match, location, history }) => {

    const { id } = useParams()
    const [searchParams ] = useSearchParams()
    let qtyToAdd = Number(searchParams.get('qty'))
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems } = cart
    const navigate = useNavigate()
    const userLogin = useSelector(state => state.userLogin )
    const {userInfo} = userLogin

    useEffect(() =>{
        if(id){
            dispatch(addToCart(id, qtyToAdd))
        }
    }, [dispatch, id, qtyToAdd])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
       if(!userInfo){
        navigate('/Login')
       } else {
        navigate('/Shipping')
       }
    }

  return (
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message variant='info'> 
                    Your Cart is Empty
                    <Link to='/Shop' >Go Shop</Link>
                </Message>
            ): (
                <ListGroup variant='flush'>
                    {cartItems.map((item)=>(
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/Item/S{item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                    ${item.price}
                                </Col>
                                <Col md={3}>
                                <Form.Control as="select"
                                        value={item.qty}
                                        onChange={(e)=>  dispatch(addToCart(item.product, Number(e.target.value)))}>
                                {
                                [...Array(item.countInStock).keys()].map((x) => (
                                    <option key={x+1} value={x+1}>
                                    {x+1}
                                    </option>
                                ))
                                }

                                </Form.Control>
                                
                                </Col>
                                <Col md={1}>
                                    <Button
                                        type="button"
                                        variant='light'
                                        onClick={() => removeFromCartHandler(item.product)}>
                                            <BsTrash/>
                                    </Button>
                                </Col>
                            </Row>

                        </ListGroup.Item>
                    ))}
                </ListGroup>

            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc +item.qty, 0)}) items</h2>
                        ${cartItems.reduce((acc, item) => acc +item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            type="button"
                            className='btn btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}>
                                Checkout
                            </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>

  )
}

export default Cart
 