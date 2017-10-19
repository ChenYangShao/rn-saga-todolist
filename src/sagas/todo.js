import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

const ADD_S = 'ADD_TODO_SUCCEED',
  ADD_F = 'ADD_TODO_FAILED',
  MODIFY_S = 'MODIFY_TODO_SUCCEED',
  MODIFY_F = 'MODIFY_TODO_FAILED',
  REMOVE_S = 'REMOVE_TODO_SUCCEED',
  REMOVE_F = 'REMOVE_TODO_FAILED'

const addTodo = function* (action) {
  try {
    yield delay(1000)
    yield put({ type: ADD_S, content: action.content })
  } catch (e) {
    yield put({ type: ADD_F, message: 'TODO 添加失败' })
  }
}

const modifyTodo = function* (action) {
  try {
    yield put({ type: MODIFY_S, id: action.id, content: action.content })
  } catch (e) {
    yield put({ type: MODIFY_F, message: 'TODO 修改失败' })
  }
}

const removeTodo = function* (action) {
  console.info('remove', action)
  try {
    yield put({ type: REMOVE_S, id: action.id })
  } catch (e) {
    yield put({ type: REMOVE_F, message: 'TODO 修改失败' })
  }
}

export { addTodo, modifyTodo, removeTodo }
