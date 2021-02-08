import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {Container, Row, Col, Alert, Navbar} from 'react-bootstrap';

import './todo.scss';

function ToDo (props) {

  const [state, setState] = useState({list: []})

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setState({ list: [...state.list, item]});
  };

  const toggleComplete = id => {

    let item = state.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = state.list.map(listItem => listItem._id === item._id ? item : listItem);
      setState({list});
    }

  };



  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setState({list});
  }, [])

  
    return (
      <>
        <Navbar expand="xl" bg="primary">
          <Row>
            <Col>
              <h1>Home</h1>
            </Col>
          </Row>
        </Navbar>
        <header>


        <Container>
          <Row>
            <Col>
                <Alert variant="dark">
                <h2>
              There are {state.list.filter(item => !item.complete).length} Items To Complete
              </h2>
              </Alert>
            </Col>
          </Row>
        </Container>
          
        </header>

        <Container>
          <Row>
            <Col>
              <TodoForm handleSubmit={addItem} />
            </Col>

            <Col>
              <TodoList
                list={state.list}
                handleComplete={toggleComplete}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  
}

export default ToDo;
