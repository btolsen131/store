import React from 'react' 
import { Link } from 'react-router-dom'
import handleAddToCart from '../pages/ItemsListPage'
import { Button, Item } from 'semantic-ui-react'

const ListItem = ({item}) => {
  

  return (
    <div className="m-2">
    <Item>
      <Item.Image size='small' src={item.image} />

      <Item.Content verticalAlign='middle'>
        <Item.Header>{item.name}</Item.Header>
        <Item.Meta className="text-muted sm">{item.category}</Item.Meta>
        <Item.Description>{item.description}</Item.Description>
        <Item.Extra>
          <Button onClick={() => this.handleAddToCart(item.slug)}>Add to cart</Button>
        </Item.Extra>
        <p>{item.id}</p>
        <Link to={`/Item/${item.id}`} className="text-muted text-decoration-none">View Item</Link>
      </Item.Content>
    </Item>
    </div>
  )
}

export default ListItem