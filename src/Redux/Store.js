import { createStore, combineReducers } from "redux";
import Todoreducer from "./Action/Reducer/Todoreducer";

const rootReducer = combineReducers({ Todoreducer })

const store = createStore(rootReducer)

export default store