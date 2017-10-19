import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
// import Styled from 'styled-components/native'

import PropTypes from 'prop-types'
// import { TextInput } from 'react-native';

// const View = Styled.View`
//   borderColor: ${props => props.borderColor}
//   padding: 15,
//   height: 50,
// `

export default class Input extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    placeholder: '...........',
  }

  constructor(props) {
    super(props)
    const initialState = {
      value: props.value,
    }

    this.state = initialState
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value || nextState.value !== this.state.value
  }

  onSubmitEditing = () => {
    const { value } = this.state
    if (!value) return

    this.props.onSubmit(value, inputValue => {
      this.setState({ value: inputValue })
    })
  }

  onChangeText = value => {
    this.props.onChange(value)
    this.setState({ value })
  }

  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.input}
        value={this.state.value}
        defaultValue={this.props.value}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    borderWidth: 1,
    borderColor: '#7cbc64',
    borderStyle: 'solid',
  },
})
