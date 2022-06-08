import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

function ItemsListPage() {
  const [items, setItems] = useState([])

  useEffect(()=>{

    async function fetchItems(){
      const { data } = await axios.get('api/items/')
      setItems(data)
    }

    fetchItems()
  },[])

  return (
  
        <div>
          <Row>
            {items.map((item) => {
              return (
              <Col key={item._id} smm={12} md={6} lg={4}>
                <Product item={item} />
              </Col>
              )
            }
            )}
          </Row>
        </div>

  )}


export default ItemsListPage