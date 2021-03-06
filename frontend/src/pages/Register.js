import React, {useState, useEffect} from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import {Form, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../components/Loader'
import Message from '../components/Message'
import {register} from '../actions/userActions'
import FormContainer from '../components/formContainer';

const Register = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
  
    const userRegister = useSelector(state => state.userRegister )
    const {error, loading, userInfo} = userRegister
  
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    useEffect(() => {
      if(userInfo){
        navigate('/Shop')
      }
    },[history, userInfo, navigate])
  
    const submitHandler = (e) => {
      e.preventDefault()
      if(password !== confirmPassword){
        setMessage('Passwords do not match')
      } else {
      dispatch(register(name, email, password))
    }
    }

    return (
    <FormContainer>
        <h1> Register Here</h1>

      {message && <Message variant='danger'>{message}</Message>}
      {error  && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}

      <Form onSubmit={submitHandler}>

      <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required type='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

      <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control required type='password' autoComplete="on" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control required type='password' autoComplete="on" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant='success' className="mt-2">Register</Button>
    </Form>
    <Row className="py-3">
        <Col>
        Returning Customer? <Link to={'/Login'}>Login</Link>
        </Col>

      </Row>
    </FormContainer>
  )
}

export default Register