import React from 'react' 
import { Card } from 'react-bootstrap'
import  Rating  from './Rating'

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
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={item.rating} text={`${item.numReviews} reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>
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