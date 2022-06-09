import React, {useEffect} from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row, ListGroup, Image, Form, Card } from 'react-bootstrap';
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'


const Cart = ({match, location, history }) => {

    const { id } = useParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams)
    const qty = 1

    const dispatch = useDispatch()

    useEffect(() =>{
        if(id){
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

  return (
    <div>
        <div>
        <h1>CART</h1>CART
    </div>
    </div>
  )
}

export default Cart
 