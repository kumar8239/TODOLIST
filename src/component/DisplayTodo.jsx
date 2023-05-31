import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deletetodo } from '../Redux/Action/todo'
const DisplayTodo=({todo,deleteTodo})=>{
//console.log(todo);
  return (
    <Container>
      <Row>
        <Col>
          <Card className='mt-3 shadow-sm'>
            <Card.Body>
              <h3>All Todo are here</h3>
              <DisplayCount/>
              <ListGroup>
                {
                  todo.map((todo, index) => (
                    <ListGroup.Item key={index}>
                      <h4>{todo.title}</h4>
                      <p>{todo.description}</p>
                      <button onClick={event=>deleteTodo(todo.id)} variant='danger' size="sm">
                        Delete
                      </button>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps=(state)=>{
  return {todo:state.Todoreducer}
}

const mapDispatchToProps=(dispatch)=>({
  deleteTodo:(id)=>(dispatch(deletetodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)