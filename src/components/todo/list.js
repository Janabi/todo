import React from 'react';
import { ListGroup } from "react-bootstrap";

function TodoList(props) {

  
  const _completed = (itemComplete) =>{
    return itemComplete ? 'success' : 'danger'
  }
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
            // className={`complete-${item.complete.toString()}`}
            key={item._id} 
            variant={_completed(item.complete)}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  
}

export default TodoList;
