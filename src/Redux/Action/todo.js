import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./Actiontypes"

//add todo action
export const addtodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

//delete todo
export const deletetodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

//update todo
export const updatetodo = (todo, id) => ({
    type: UPDATE_TODO,
    payload: { todo: todo, todoid: id }
})