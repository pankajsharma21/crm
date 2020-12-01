import React, { Component } from 'react';
import axios from 'axios';


class AddLead extends Component {

  state = {
    id: null,
    created_on: "",
    source: "",
    assigned_to: "",
    client_name: "",
    email: "",
    tel_no: "",
    position: "",
    company: "",
    domain: "",
    status: "",
    confidence: "",
    comments: [{ body: "", date: "" }],
    connected_times: null,
    is_delete: ""
  }

  addLead = () => {
    const lead = {
      lead_id: this.state.lead_id,
      lead_name: this.state.lead_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }

    if(Object.keys(lead).length > 0 && lead.constructor === Object){
      axios.post(`${base_url}/leads`, lead)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({
              id: null,
    created_on: "",
    source: "",
    assigned_to: "",
    client_name: "",
    email: "",
    tel_no: "",
    position: "",
    company: "",
    domain: "",
    status: "",
    confidence: "",
    comments: [{ body: "", date: "" }],
    connected_times: null,
    is_delete: ""
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
      id: null,
    created_on: "",
    source: "",
    assigned_to: "",
    client_name: "",
    email: "",
    tel_no: "",
    position: "",
    company: "",
    domain: "",
    status: "",
    confidence: "",
    comments: [{ body: "", date: "" }],
    connected_times: null,
    is_delete: ""
    })
  }

  render() {
    let { 
      id,
      created_on,
      source,
      assigned_to,
      client_name,
      email,
      tel_no,
      position,
      company,
      domain,
      status,
      confidence,
      comments: [{ body,date }],
      connected_times,
      is_delete
    } = this.state;

    return (
      <div>
         <Form onSubmit = {this.addLead}>
      <FormGroup>
        <Label for="client_id" htmlFor={this.htmlId}>Client Id</Label>
        <Input type="text" name="client_id" placeholder="CLI-0000"   id={this.htmlId} onChange={this.handleChange}  value={id}/>
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Name </label>
        <input name="client_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Name here" value={created_on} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Company </label>
        <input name="company_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Company Name here" value={company_name} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Position </label>
        <input name="position" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Position Name here" value={source} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Mobile no.  </label>
        <input name="tel" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Mobile no. Name here" value={assigned_to} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client email </label>
        <input name="email" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Email here" value={client_name} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={email} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={tel_no} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={position} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={company} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={ domain} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={status} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={confidence} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={comments} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={connected_times} />
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Last Contacted date </label>
        <input name="last_contacted_on" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Last contacted  here" value={is_delete} />
      </FormGroup>
      <Button type = "submit" className="btn btn-success">add Client</Button>
    </Form>
      
      </div>
    )
  }
}

export default AddLead