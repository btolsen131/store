import React, {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import {Form, Button, Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../components/Loader'
import Message from '../components/Message'
import {getUserData, updateUserProfile} from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const Profile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails )
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin )
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const navigate = useNavigate()


    useEffect(() => {
        if(!userInfo){
          navigate('/Login')
        } else{
            if(!user || !user.name || success){
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserData('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
      },[dispatch, userInfo, navigate, success, user])
    
      const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
          setMessage('Passwords do not match')
        } else {
        dispatch(updateUserProfile({
            'id':user._id,
            'name':name,
            'email':email,
            'password':password
        }))
        setMessage('')
      }
      }

    return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
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
          <Form.Control  type='password' autoComplete="on" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' autoComplete="on" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button type="submit" variant='success' className="mt-2">Update profile</Button>
    </Form>
        </Col>
        <Col md={9}>
            <h2>Orders</h2>
        </Col>
    </Row>
  )
}

export default Profile