import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import Styled from 'styled-components/native'
import { connect } from 'react-redux'
import Input from '../base/Input'
import { actionCreator } from '../../sagas'

const NormalText = Styled.Text`
  color: 'rgb(255, 65, 65)'
`
const initialActions = [{ name: 'remove', type: 'REMOVE_TODO' }, { name: 'modify', type: 'MODIFY_TODO' }]

@connect(null, actionCreator(initialActions))
export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    console.info(props)
    this.state = {
      value: null,
      id: props.navigation.state.params.id,
    }
  }
  state = {
    value: null,
  }

  handleChange = value => {
    this.setState({ value })
  }

  handleModify = () => {
    this.props.modify({ content: this.state.value, id: this.state.id })
    this.props.navigation.navigate('List')
  }

  handleRemove = () => {
    this.props.remove({ id: this.state.id })
    this.props.navigation.navigate('List')
  }

  render() {
    return (
      <View style={styles.container}>
        <Input value={this.props.navigation.state.params.content} onChange={this.handleChange} />
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={this.handleModify} style={styles.modify}>
            <NormalText>提交修改</NormalText>
          </TouchableOpacity>
          <TouchableHighlight onPress={this.handleRemove} style={styles.delete}>
            <Text style={styles.danger}>删除</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  danger: {
    color: '#fff',
  },
  btnGroup: {
    marginTop: 20,
    height: 40,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  modify: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#7cbc64',
    borderStyle: 'solid',
  },
  delete: {
    height: 40,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ff4141',
    borderWidth: 1,
    borderColor: '#ff4141',
    borderStyle: 'solid',
  },
})
