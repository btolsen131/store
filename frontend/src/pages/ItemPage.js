import React, {useState, UseEffect, useEffect} from 'react'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector} from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ItemPage = ({ match}) => {
  const [qty, setQty] = useState(1)

  const { id } = useParams()
  const dispatch = useDispatch()
  const itemDetails = useSelector(state => state.itemDetails)
  const {error, loading, item } = itemDetails
  
  useEffect(() =>{
    dispatch(listProductDetails(id))
 
  },[dispatch, id])

  let history = useNavigate()

  const addToCartHandler = () => {
    history(`/Cart/${id}?qty=${qty}`)
  }
 

  return (
    <div>
      <Link to='/Shop' className="btn btn-light my-3">Go Back</Link>
      {loading ? <Loader />
            :error ? <Message variant='danger'>{error}</Message>
            :
      <Row>
        <Col md={6}>
          <Image src={item.image} alt={item.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{item.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={item.rating} text={`${item.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${item.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {item.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${item.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {item.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              {item.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity
                    </Col>
                    <Col xs='auto' className="my-1">
                      <Form.Control as="select"
                      value={qty}
                      onChange={(e)=>  setQty(e.target.value)}>
                        {
                          [...Array(item.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1}>
                              {x+1}
                            </option>
                          ))
                        }

                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button onClick={addToCartHandler} className="btn-block" disabled={item.countInStock === 0} type='button'>Add to Cart</Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>

        </Col>
      </Row>
      }
    </div>
    )}

export default ItemPage