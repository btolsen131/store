import React, {useState, useEffect} from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import {Form, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../components/Loader'
import Message from '../components/Message'
import {login} from '../actions/userActions'
import FormContainer from '../components/formContainer';


const Login = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [search] = useSearchParams()
  const searchRedirect = search.get('redirect')

  const redirect = searchRedirect ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLogin )
  const {error, loading, userInfo} = userLogin


  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(userInfo){
      navigate('/Shop')
    }
  },[history, userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email,password))
  }

  return (
    <FormContainer>
      <h1> Sign In</h1>
      {error  && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" variant='success' className="mt-2">Sign In</Button>

      </Form>
      <Row className="py-3">
        <Col>
        New Customer? <Link to={redirect ? `/Register?redirect=${redirect}` : '/Register'}>Register</Link>
        </Col>

      </Row>
    </FormContainer>
  )
}

export default Login
