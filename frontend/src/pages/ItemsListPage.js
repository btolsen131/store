import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {Segment, Message, Loader, Dimmer, Image, Container} from 'semantic-ui-react'
import {authAxios} from '../utils';
import { Button, Item } from 'semantic-ui-react'
import Product from '../components/Product'

class ItemsListPage extends React.Component {
  
  state ={
    loading:false,
    error:null,
    data:[]
  }
  componentDidMount(){
    this.setState({loading:true});
    axios.get('/api/items')
    .then(res => {
      this.setState({ data: res.data, loading:false});
    })
    .catch(err =>{
      this.setState({error: err, loading:false});
    })
  }

render() {
  const {data, error, loading} = this.state;
  return (
    <div>
    <Container>
    {error && (
          <Message
            error
            header="There was some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
      {loading && (
        <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
  
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
      )}
        <div>
          <Row>
            {data.map((item) => {
              return (
              <Col key={item.id} smm={12} md={6} lg={4}>
                <Product item={item} />
              </Col>
              )
            }
            )}
          </Row>
        </div>
    </Container>
    </div>
  )}
}

export default ItemsListPage