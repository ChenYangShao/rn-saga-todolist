import { combineReducers } from 'redux'
import AppNavigator from './navigators/AppNavigator'
const listAction = AppNavigator.router.getActionForPathAndParams('List')
const initTodoState = AppNavigator.router.getStateForAction(listAction)

const initState = {
  ...initTodoState,
  list: [
    {
      content: 'This is a fake task',
      comments: [],
      id: 0,
    },
    {
      content: "pretend i'm fine",
      comments: [],
      id: 1,
    },
  ],
  count: 2,
}

function todo(state = initState, action) {
  let list
  switch (action.type) {
    case 'ADD_TODO_SUCCEED':
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.id || new Date().valueOf(),
            comments: action.comments || [],
            content: action.content,
          },
        ],
        count: state.list.length++,
      }
    case 'MODIFY_TODO_SUCCEED':
      list = state.list
        .map(task => {
          if (task.id === parseInt(action.id, 10)) {
            if (!action.content) return
            return {
              ...task,
              content: action.content,
            }
          }
          return task
        })
        .filter(task => Boolean(task))

      return {
        ...state,
        list,
        count: list.length,
      }
    case 'REMOVE_TODO_SUCCEED':
      list = state.list.filter(task => task.id !== action.id)
      return {
        ...state,
        list,
        count: list.length,
      }
    default:
      return state
  }
}

export default combineReducers({
  todo,
})
