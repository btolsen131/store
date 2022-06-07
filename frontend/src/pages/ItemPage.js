import React, {useState, UseEffect, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ItemPage = ({ match }) => {
  const { id } = useParams();
  const item = products.find((p) => p._id === (id))
  console.log(item)
  return (
    <div>
      <Link to='/' className="btn btn-light my-3">Go Back</Link>
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
              <ListGroup.Item>
                <Button className="btn-block" disabled={item.countInStock === 0} type='button'>Add to Cart</Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>

        </Col>
      </Row>
    </div>
    )}

export default ItemPage