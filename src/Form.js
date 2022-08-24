import React from "react";
import { Form, Button } from 'react-bootstrap';

class Forms extends React.Component {
  render() {


    return (
      
        <Form onSubmit={this.props.handleCitySubmit}>
          <Form.Group className="mb-3">
          <div className='w-100'>
            <Form.Label type="text">Search a City</Form.Label>
            <Form.Control onInput={this.props.handleCityInput} />
          </div>
            <Button variants="primary" type="submit">
              Explore!
            </Button>
          </Form.Group>
        </Form>
      
    )
  }
}

export default Forms