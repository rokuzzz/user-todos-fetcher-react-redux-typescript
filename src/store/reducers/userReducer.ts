interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch(action.type){
    case UserActionTypes.FETCH_USERS:
      return {users: [], loading: true, error: null}
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {users: action.payload, loading: false, error: null}
     case UserActionTypes.FETCH_USERS_ERROR:        
      return {users: [], loading: false, error: action.payload}
    default:
      return state
  }
}