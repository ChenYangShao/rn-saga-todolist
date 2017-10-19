import { takeEvery, takeLatest } from 'redux-saga/effects'
import { addTodo, modifyTodo, removeTodo } from './todo'

// takeEvery 允许并发, takeLatest 不允许并发 只取最新的, 并且正在使用的也会被取消
const sagas = function* (getState) {
  yield [
    takeEvery('ADD_TODO_REQUEST', addTodo),
    takeEvery('MODIFY_TODO_REQUEST', modifyTodo),
    takeLatest('REMOVE_TODO_REQUEST', removeTodo),
  ]

  yield* takeEvery('*', function* logger(action) {
    console.log('action', action)
    console.log('state after', getState())
  })

  // while (true) {
  // take 暂停 generate 直到一个action 被发起 | take 是主动拉取的 (一个action) | take(['a', 's']) 监听并发action
  // fork 不阻塞
  // cancel 取消
  // race 会自动取消失败的effects
  //   const action = yield take('*')

  //   console.log('take action', action)
  // }
}

export const actionCreator = actions => dispatch => {
  if (Array.isArray(actions)) {
    const tempActions = {}
    actions.forEach(action => {
      Object.assign(tempActions, {
        [action.name]: options => dispatch({ type: action.type + '_REQUEST', ...options }),
      })
    })
    return { ...tempActions }
  }
}

export default sagas
