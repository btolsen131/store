import React, {useState, } from 'react'
import {Form, Button, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import FormContainer from '../components/formContainer';
import { savePaymentMethod } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState('Paypal')


    if(!shippingAddress.address){
        navigate('/Shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/Placeorder')
    }
  
    return (
    <FormContainer>
        <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>
                Select Method
            </Form.Label>
            <Col>
                <Form.Check id='Paypal' name='paymentMethod' 
                checked type='radio' label='Paypal or Credit Card' 
                onChange={(e) => setPaymentMethod(e.target.value)}>

                </Form.Check>
            </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
            Continue
        </Button>

        </Form>
    </FormContainer>
  )
}

export default Payment