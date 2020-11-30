import React, { Component } from 'react';
import nextId from "react-id-generator";
import axios from 'axios';


class AddClient extends Component {
  clientId = nextId("CLI-");

  state = {
    client_id: null,
    client_name: "",
    company_name: "",
    position: "",
    tel: null,
    email: "",
    last_contacted_on: "",
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
    if(Object.keys(client).length === 0 && client.constructor === Object){
      axios.post('http://localhost:5000/clients', client)
        .then(res => {
          if(res.data){
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

  handleChange = (event) => {
    const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }

  render() {
    let { 
      client_name,
      company_name,
      position,
      tel,
      email,
      last_contacted_on 
    } = this.state;

    return (
      <div>
        <input name="client_id" type="text"  onChange={this.handleChange}  value={this.clientId} />
        <div className="form-group">
          <label>Enter the Client Name </label>
          <input name="client_name" type="text" class="form-control" onChange={this.handleChange} value={client_name} />
        </div>
        <div className="form-group">
          <label>Enter the Client Company </label>
          <input name="company_name" type="text" class="form-control" onChange={this.handleChange} value={company_name} />
        </div>
        <div className="form-group">
          <label>Enter the Client Position </label>
          <input name="position" type="text" class="form-control" onChange={this.handleChange} value={position} />
        </div>
        <div className="form-group">
          <label>Enter the Client Mobile no.  </label>
          <input name="tel" type="text" class="form-control" onChange={this.handleChange} value={tel} />
        </div>
        <div className="form-group">
          <label>Enter the Client email </label>
          <input name="email" type="text" class="form-control" onChange={this.handleChange} value={email} />
        </div>
        <div className="form-group">
          <label>Enter the Client Last Contacted date </label>
          <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} value={last_contacted_on} />
        </div>
        <button className="btn btn-success" onClick={this.addClient}>add Client</button>
      </div>
    )
  }
}

export default AddClient