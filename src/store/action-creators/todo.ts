import { TodoAction, TodoActionTypes } from './../../types/todo';
import { Dispatch } from 'redux';
import axios from "axios";

export const fetchTodos: any = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS})
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {_page: page, _limit: limit} 
      })
      // request loading simulation
      setTimeout(() => {
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
      }, 500)
    } catch (e) {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_ERROR, 
          payload: 'An error occurred while loading todos'
        })
    }
  }
}

export function setTodoPage(page: number) : TodoAction {
  return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}