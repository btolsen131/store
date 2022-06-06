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

          </ListGroup>
        </Col>
        <Col>
        </Col>
      </Row>
    </div>
    )}

export default ItemPage