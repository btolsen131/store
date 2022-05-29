import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

const ItemsListPage = () => {
    let [items, setItems] = useState([])
    useEffect(()=> {
        getItems()
    },[])

    //function to ping API for list of store items from django backend
    let getItems = async () => {
       let response = await fetch('/api/items')
       let data = await response.json()
       console.log('DATA:', data)
       setItems(data)
    } 


  return (
    <div>
        <div className='items-list'>
            {items.map((item, index) => 
            <ListItem key={index} item={item}/>
            )}
        </div>
    </div>
  )
}

export default ItemsListPage