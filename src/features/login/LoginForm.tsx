import { Text, TouchableOpacity, useBarnState, View } from 'bara-react'
import React from 'react'
import { compose, graphql, withApollo } from 'react-apollo'
import { StyleSheet, TextInput } from 'react-native'

import * as a from './graphql'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    maxWidth: 750,
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
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

export interface LoginProps {
  key: string
}

const LoginForm = (props: LoginProps) => {
  const [username, setUsername] = useBarnState('form.login.username', '')
  const [password, setPassword] = useBarnState('form.login.password', '')

  const { key } = props

  function updateUsername(newVal: string) {
    setUsername(newVal)
  }

  function updatePassword(newVal: string) {
    setPassword(newVal)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username: {username}</Text>
        <TextInput onChangeText={updateUsername} style={styles.inputText} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password: {password}</Text>
        <TextInput onChangeText={updatePassword} style={styles.inputText} />
      </View>
    </View>
  )
}

export default compose(
  graphql(a.login, { name: 'login' }),
  graphql(a.translations),
)(withApollo(LoginForm))
