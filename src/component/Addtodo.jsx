import React, {  useState } from 'react'
import { Container, Row,Col,Card,Form } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addtodo } from '../Redux/Action/todo'
import { connect } from 'react-redux'
import { ADD_TODO } from '../Redux/Action/Actiontypes'
import { v4 } from 'uuid'


const Addtodo=({addtodo})=>{
    const [todo,settodo]=useState({
        title:'',
        description:'',
        id:''
    })
    const handleSubmit=(event)=>{
    event.preventDefault()
    //add todo and store
    addtodo({...todo,id:v4()})
    console.log(todo);
    settodo({
        title:'',
        description:''
    })
    
    }
  return (
    <Container>
        <Row>
            <Col>
            <Card className='shadow-sm'>
                <Card.Body>
                    <h3>Add todo here!!</h3>
                    <DisplayCount/>

                    {/* Form */}

                    <Form onSubmit={handleSubmit}>
                        {/* Title */}
                        <Form.Group>
                            <Form.Label>Todo Title</Form.Label>
                            <Form.Control type='text'placeholder='Enter here' value={todo.title} onChange={event=>settodo({...todo,title:event.target.value})}></Form.Control>
                        </Form.Group>

                          {/* Discription */}
                          <Form.Group className='mt-3'>
                            <Form.Label>Todo Discription</Form.Label>
                            <Form.Control as={'textarea'} type='text' placeholder='Enter here'  value={todo.description} onChange={event=>settodo({...todo,description:event.target.value})}></Form.Control>
                        </Form.Group>

                        <Container className='text-centre mt-3'>
                            <button type='submit'variant='primary'>
                                Add todo
                            </button>
                        </Container>
                    </Form>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}
const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
    addtodo:(todo)=>(dispatch(addtodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps)(Addtodo)