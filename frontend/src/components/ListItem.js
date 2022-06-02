import React from 'react' 
import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'

const ListItem = ({item}) => {
  
  return (
    <div className="border rounded border-secondary m-2">
    <Figure>
      <Figure.Image
      width={250}
      height={180}
      alt="failed to load product image"
      src={item.image}/>
      <Figure.Caption>
        <span>{item.description}</span>
        <p className='text-muted sm'>${item.price}</p>
        <Link to={`/Item/${item.id}`} className="stretched-link text-muted text-decoration-none">Link to product</Link>
      </Figure.Caption>
    </Figure>
    
    
    </div>
  )
}

export default ListItem