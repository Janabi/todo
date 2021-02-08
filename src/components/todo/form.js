import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";

function TodoForm(props) {

  const [state, setState] = useState({ item: {} });

  const handleInputChange = e => {
    setState({ item: {...state.item, [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(state.item);
    const item = {};
    setState({item});
  };

 
    return (
      <>
        <Card>
          <Card.Body>
            <h3>Add Item</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Text>To Do Item</Form.Text>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Text>Difficulty Rating</Form.Text>
                <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group>
                <Form.Text>Assigned To</Form.Text>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
              </Form.Group>
              <Button type="submit">Add Item</Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  
}

export default TodoForm;
