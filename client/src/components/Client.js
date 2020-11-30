import React, {Component} from 'react';
import axios from 'axios';
import base_url from "./../api/bootapi";
import AddClient from './AddClient';
import ListClient from './ListClient';

class Client extends Component {

  state = {
    clients: []
  }

  componentDidMount(){
    this.getClients();
  }

  getClients = () => {
    axios.get(`${base_url}/clients`)
      .then(res => {
        if(res.data){
          this.setState({
            clients: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteClient = (id) => {

    axios.delete(`${base_url}/clients${id}`)
      .then(res => {
        if(res.data){
          this.getClients()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { clients } = this.state;

    return(
      <div>
        <h1>All Clients</h1>
        <AddClient getClients={this.getClients}/>
        <ListClient clients={clients} deleteClient={this.deleteClient}/>
      </div>
    )
  }
}

export default Client;