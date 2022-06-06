import React from 'react' 
import { Link } from 'react-router-dom'
import { Button, Item } from 'semantic-ui-react'
import { Card } from 'react-bootstrap'

const Product = ({item}) => {
  
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/Item/${item.id}`}>
        <Card.Img src = {item.image} />
      </a>

      <Card.Body>
        <a href={`/Item/${item.id}`}>
          <Card.Title as="div">
            <strong>{item.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">
          <div className="my-3">
            ${item.price}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product