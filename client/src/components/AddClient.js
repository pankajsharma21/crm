import React, { Component } from 'react';
import nextId from "react-id-generator";
import base_url from "./../api/bootapi";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class AddClient extends Component {
  htmlId = nextId("CLI-");

  state = {
    client_id: null,
    client_name: "",
    company_name: "",
    position: "",
    tel: null,
    email: "",
    last_contacted_on: "",
  }

  handleChange = (event) => {
    const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }


  addClient = () => {
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
    if(Object.keys(client).length > 0 && client.constructor === Object){
      axios.post(`${base_url}/clients`, client)
        .then(res => {
          if(res.data){
            console.log("added successfully");
            alert("added successfully");
            this.props.getClients();
            this.setState({
              client_id: null,
              client_name: "",
              company_name: "",
              position: "",
              tel: null,
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
         <Form onSubmit = {this.addClient}>
      <FormGroup>
        <Label for="client_id" htmlFor={this.htmlId}>Client Id</Label>
        <Input type="text" name="client_id" placeholder="CLI-0000"   id={this.htmlId} onChange={this.handleChange}  value={client_id}/>
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Name </label>
        <input name="client_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Name here" value={client_name} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Company </label>
        <input name="company_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Company Name here" value={company_name} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Position </label>
        <input name="position" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Position Name here" value={position} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Mobile no.  </label>
        <input name="tel" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Mobile no. Name here" value={tel} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client email </label>
        <input name="email" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Email here" value={email} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={last_contacted_on} />
      </FormGroup>
      <Button type = "submit" className="btn btn-success">add Client</Button>
    </Form>
      
      </div>
    )
  }
}

export default AddClient