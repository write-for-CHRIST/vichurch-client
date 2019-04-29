import { BaraProvider, TouchableOpacity } from 'bara-react'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { Octicons as Icon } from 'bara-react-icons/es'

import { SideBar, SideBarItem } from './components/SideBar'
import { GlobalStyles } from './GlobalStyles'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <BaraProvider>
        <>
          <GlobalStyles />
          <View style={styles.container}>
            <SideBar
              horizontal={false}
              horizontalSide="bottom"
              verticalSide="left"
            >
              <SideBarItem name="home" iconMaterial="home" />
              <SideBarItem
                name="settings"
                iconMaterial="settings"
                label="Settings"
              />
            </SideBar>
          </View>
        </>
      </BaraProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: '100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
