import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
// import { put } from 'redux-saga/effects'
import Input from '../base/Input'

function mapDispatchToProps(dispatch) {
  return {
    addTodo: content => dispatch({ type: 'ADD_TODO_REQUEST', content }),
  }
}

@connect(({ todo }) => ({ todo }), mapDispatchToProps)
export default class TodoList extends React.Component {
  handleAddTask = (content, resetValue) => {
    this.props.addTodo(content)
    resetValue('')
  }

  handlePress = task => {
    this.props.navigation.navigate('Detail', { content: task.content, id: task.id })
  }

  _keyExtractor = task => {
    return task.id
  }
  render() {
    return (
      <View style={styles.container}>
        <Input onSubmit={this.handleAddTask} />
        <FlatList
          data={this.props.todo.list}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <Text
              key={item.id}
              style={styles.item}
              onPress={() => {
                this.handlePress(item)
              }}
            >
              {item.content}
            </Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  item: {
    flex: 1,
    height: 40,
    color: 'red',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
})
