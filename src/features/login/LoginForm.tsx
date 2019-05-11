import { Text, TouchableOpacity, View } from 'bara-react'
import React from 'react'
import { compose, graphql } from 'react-apollo'
import { StyleSheet, TextInput } from 'react-native'

import * as a from './graphql'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    maxWidth: 750,
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.6,
  },
  inputContainer: {
    width: 360,
  },
  inputLabel: {
    margin: 4,
  },
  inputText: {
    height: 36,
    padding: 8,
    backgroundColor: '#222',
    borderRadius: 16,
    borderWidth: 1,
    color: '#fff',
  },
})

export interface LoginProps {}

const LoginForm = (props: LoginProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username:</Text>
        <TextInput style={styles.inputText} />
      </View>
    </View>
  )
}

export default graphql(a.login)(LoginForm)
