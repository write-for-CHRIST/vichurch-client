import { Text, View } from 'bara-react'
import React from 'react'
import { StyleSheet } from 'react-native'

import LoginForm from './LoginForm'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 16,
  },
})

export interface LoginProps {}

export const LoginScreen = (props: LoginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Đăng Nhập</Text>
      <LoginForm />
    </View>
  )
}

export default LoginScreen
