import React, {useState, UseEffect, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemPage = ({ match }) => {

  let itemParams = useParams();
  let [item, setItem] = useState(null)

  useEffect(()=>{
    getItem()
  },[])

  let getItem = async ()=>{
   let response = await fetch(`/api/items/${itemParams.id}`)
   let data = await response.json()
   setItem(data)
  }

  return (
    <div>
      <p>{item?.name}</p>
    </div>
    )}

export default ItemPage