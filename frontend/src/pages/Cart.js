import React, {useEffect} from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row, ListGroup, Image, Form, Card } from 'react-bootstrap';
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'


const Cart = ({match, location, history }) => {

    const { id } = useParams()
    const [searchParams ] = useSearchParams()
    let qtyToAdd = searchParams.get('qty')
    const qty = 1
    console.log(qtyToAdd)
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems } = cart
    console.log('cartItems', cartItems)
    useEffect(() =>{
        if(id){
            dispatch(addToCart(id, qtyToAdd))
        }
    }, [dispatch, id, qtyToAdd])

  return (
    <div>
        <div>
        <h1>CART</h1>CART
    </div>
    </div>
  )
}

export default Cart
 