import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import { renderMatches } from 'react-router-dom'
import axios from 'axios'
import {Segment, Message, Loader, Dimmer, Image, Container} from 'semantic-ui-react'

<Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>

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

  // let [items, setItems] = useState([])
  //   useEffect(()=> {
  //       getItems()
  //   },[])

  //   //function to ping API for list of store items from django backend
  //   let getItems = async () => {
  //      let response = await fetch('/api/items')
  //      let data = await response.json()
  //      console.log('DATA:', data)
  //      setItems(data)
  //   } 

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
  
        <Image src='/images/wireframe/short-paragraph.png' />
      </Segment>
      )}
        <div>
            {data.map((item, index) => 
            <ListItem key={index} item={item}/>
            )}
        </div>
    </Container>
    </div>
  )}
}

export default ItemsListPage