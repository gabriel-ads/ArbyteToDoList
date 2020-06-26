import { createStore } from 'redux'
import todoList  from '../reducers/todo'

export const store = createStore(todoList)