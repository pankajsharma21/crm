import React, { Component } from 'react';
import axios from 'axios';


class AddSale extends Component {

  state = {
    employee_id: "",
    employee_name: "",
    lead_pipeline: {
        open_leads: null,
        contacted_leads: null,
        qualified_leads: null,
        closed_lead: null
    }
  }

  addSale = () => {
    const sale = {
      sale_id: this.state.sale_id,
      sale_name: this.state.sale_name,
      company_name: this.state.company_name,
      position: this.state.position,
      tel: this.state.tel,
      email: this.state.email,
      last_contacted_on: this.state.last_contacted_on,
    }
     //to check if for empty js object
    if(Object.keys(sale).length === 0 && sale.constructor === Object){
      axios.post(`${base_url}/Sales`, sale)
        .then(res => {
          if(res.data){
            this.props.getSales();
            this.setState({
              employee_id: "",
              employee_name: "",
              lead_pipeline: {
                  open_leads: null,
                  contacted_leads: null,
                  qualified_leads: null,
                  closed_lead: null}
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
      employee_id: "",
      employee_name: "",
      lead_pipeline: {
          open_leads: null,
          contacted_leads: null,
          qualified_leads: null,
          closed_lead: null
      }
    })
  }

  render() {
    let { 
      employee_id,
      employee_name,
      lead_pipeline: {
          open_leads,
          contacted_leads,
          qualified_leads,
          closed_lead
      }
    } = this.state;

    return (
      <div>
         <Form onSubmit = {this.addSale}>
      <FormGroup>
        <Label for="client_id" htmlFor={this.htmlId}>Client Id</Label>
        <Input type="text" name="client_id" placeholder="CLI-0000"   id={this.htmlId} onChange={this.handleChange}  value={employee_id}/>
      </FormGroup>
      <FormGroup>
        <label>Enter the Client Name </label>
        <input name="client_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Name here" value={employee_name} />
      </FormGroup>
    <FormGroup>
        <label>Enter the Client Company </label>
        <input name="company_name" type="text" class="form-control" onChange={this.handleChange} placeholder="Enter Client Company Name here" value={lead_pipeline.open_leads} />
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

export default AddSale