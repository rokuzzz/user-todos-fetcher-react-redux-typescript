import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';
import axios from "axios";

export const fetchUsers: any = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      // request loading simulation
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
      }, 500)
    } catch (e) {
        dispatch({
          type: UserActionTypes.FETCH_USERS_ERROR, 
          payload: 'An error occurred while loading users'
        })
    }
  }
}