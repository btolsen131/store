import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts} from '../actions/productActions'


function ItemsListPage() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.itemList)
  const {error, loading, items } = productList
  
  useEffect(()=>{
    dispatch(listProducts())
  
  },[dispatch])

  

  return (
  
        <div>
          {loading ? <Loader />
            :error ? <Message variant='danger'>{error}</Message>
            :
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
            }
         
        </div>

  )}


export default ItemsListPage