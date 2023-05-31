import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Actiontypes"

const intialstate = []
export default (state = intialstate, action) => {
    switch (action.type) {
        case ADD_TODO:
            //add todo
           
            return [...state, action.payload]
        case DELETE_TODO:
            //delete todo
            const newstate = state.filter((todo) => todo.id != action.payload)
            return newstate
        case UPDATE_TODO:
            //update todo
            const updatestate = state.map(todo => {
                if (todo.id == action.payload.todoid) {
                    todo.title = action.payload.todo.title
                    todo.description = action.payload.todo.description
                }
                return todo
            })
            return updatestate
        default:
            return state
    }
}