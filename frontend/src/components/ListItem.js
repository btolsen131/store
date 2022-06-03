import React from 'react' 
import { Link } from 'react-router-dom'

import { Button, Image, Item } from 'semantic-ui-react'

const ListItem = ({item}) => {
  
  return (
    <div className="m-2">
    <Item>
      <Item.Image size='small' src={item.image} />

      <Item.Content verticalAlign='middle'>
        <Item.Header>{item.name}</Item.Header>
        <Item.Description>{item.description}</Item.Description>
        <Item.Extra>
          <Button>Add to cart</Button>
        </Item.Extra>
        <p>{item.id}</p>
        <Link to={`/Item/${item.id}`} className="text-muted text-decoration-none">View Item</Link>
      </Item.Content>
    </Item>
    </div>
  )
}

export default ListItem