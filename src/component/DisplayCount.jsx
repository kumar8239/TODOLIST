import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'


const DisplayCount = ({ todo }) => {
//console.log(todo);
  return (
    <Card className='shadow-sm border border-0'>
      <Card.Body>
        <h4>Number of todo : {(todo.length)}</h4>
      </Card.Body>
    </Card>
  )
}
const mapStateToProps = (state) =>{
  {
    //console.log(state);
    return{todo:state.Todoreducer}
    
  }
}
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(DisplayCount)