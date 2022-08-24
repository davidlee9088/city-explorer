import React from "react";
import { Form, Button } from 'react-bootstrap';

class Forms extends React.Component {
  render() {


    return (
      
        <Form onSubmit={this.props.handleCitySubmit}>
          <Form.Group className="form.group">
          <div className='form.everything'>
            <Form.Label type="text">Search a City</Form.Label>
            <Form.Control onInput={this.props.handleCityInput} />
          </div>
            <Button variants="Secondary" type="submit">
              Explore!
            </Button>
          </Form.Group>
        </Form>
      
    )
  }
}

export default Forms