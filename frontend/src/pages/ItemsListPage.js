import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import {Segment, Message, Loader, Dimmer, Image, Container} from 'semantic-ui-react'
import {authAxios} from '../utils';
import { Button, Item } from 'semantic-ui-react'


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

  handleAddToCart = slug =>{
    this.setState ({loading: true});
    authAxios
      .post('/add-to-cart',{ slug })
      .then(res => {
        console.log(res.data)
        this.props.refreshCart();
        this.setState({ loading: false});
      })
      .catch(err => {
        this.setState({ error: err, loading:false});
      })
  };

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
            {data.map((item) => {
              return (
              <Item key={item.id}>
                <Item.Image size='small' src={item.image} />

                <Item.Content verticalAlign='middle'>
                  <Item.Header>{item.name}</Item.Header>
                  <Item.Meta className="text-muted sm">{item.category}</Item.Meta>
                  <Item.Description>{item.description}</Item.Description>
                  <Item.Extra>
                    <Button onClick={() => this.handleAddToCart(item.slug)}>Add to cart</Button>
                  </Item.Extra>
                  <Link to={`/Item/${item.id}`} className="text-muted text-decoration-none">View Item</Link>
                </Item.Content>
              </Item>
              )
            }
            )}
        </div>
    </Container>
    </div>
  )}
}

export default ItemsListPage