import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes"

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    case RESET:
      return { value: 0 }
    default:
      return state
  }
}

export default counterReducer
