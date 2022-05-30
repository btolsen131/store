import React from 'react'
import { Link } from 'react-router-dom'


const ListItem = ({item}) => {
  return (
    <Link to={`/item/${item.id}`}>
        <h3>{item.name}</h3>
    </Link>
  )
}

export default ListItem