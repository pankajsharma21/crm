import React, { Component } from 'react';
//import nextId from "react-id-generator";
import axios from 'axios';
//import {Form, FormGroup,} from 'reactstrap';
//import {Button,Card,CardContent,} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddClient extends Component {
 // htmlId = nextId("CLI-");

  state = {
    client_id: "",
    client_name: "",
    company_name: "",
    position: "",
    tel: "",
    email: "",
    last_contacted_on: "",
  }



 

  addClient = (event) => {

    const client = {
      client_id: this.state.client_id,
      client_name: this.state.client_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

     //to check if for empty js object
    if(Object.keys(client).length !== 0 && client.constructor === Object){
      axios.post('/api/clients', client)
        .then(res => {
          if(res.data){
            console.log("added successfully");
            toast.success("added successfully");
            this.props.getClients();
            this.setState({
              client_id: "",
              client_name: "",
              company_name: "",
              position: "",
              tel: "",
              email: "",
              last_contacted_on: ""
            })
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    let {
      client_id, 
      client_name,
      company_name,
      position,
      tel,
      email,
      last_contacted_on 
    } = this.state;

    return (
      <div>
      <form>
        <div className="form-group">
          <input type="text" name="client_id" placeholder="Client ID" className="form-control" onChange={this.handleChange} value={client_id} required />
        </div>
        <div className="form-group">
          <input type="text" name="client_name" placeholder="Client name" className="form-control" onChange={this.handleChange} value={client_name} required />
        </div>
        <div className="form-group">
          <input type="text" name="company_name" placeholder="Company name" className="form-control" onChange={this.handleChange} value={company_name} required />
        </div>
        <div className="form-group">
          <input type="text" name="position" placeholder="Position" className="form-control" onChange={this.handleChange} value={position} required />
        </div>
        <div className="form-group">
          <input type="text" name="tel" placeholder="Phone no." className="form-control" onChange={this.handleChange} value={tel} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email ID" className="form-control" onChange={this.handleChange} value={email} required />
        </div>
        <div className="form-group">
          <input type="date" name="last_contacted_on" placeholder="Last contacted on" className="form-control" onChange={this.handleChange} value={last_contacted_on} required />
        </div>
        <button type="button" className="btn btn-success" onClick={this.addClient}>add Client</button>
      </form>
      <>
    <ToastContainer autoClose={false} />
    </>
    </div>
    )
  }
}

export default AddClient