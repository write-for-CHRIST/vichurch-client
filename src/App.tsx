import { BaraProvider, TouchableOpacity, useBarnState } from 'bara-react'
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { Octicons as Icon } from 'bara-react-icons/es'

import {
  SideBar,
  SideBarContent,
  SideBarItem,
  SideBarLayout,
  SideBarSeparator,
  SideBarSpace,
} from 'bara-react-yofi'
import { GlobalStyles } from './GlobalStyles'

interface Props {}
export const App = () => {
  const [horizontal] = useBarnState('horizontal', false)
  return (
    <BaraProvider>
      <>
        <GlobalStyles />
        <SideBarLayout
          horizontal={horizontal}
          horizontalSide="bottom"
          verticalSide="left"
        >
          <SideBar name="sidebar-demo" horizontal={horizontal}>
            <SideBarItem name="home" iconMaterial="home" label="Home" />
            <SideBarSeparator horizontal={horizontal} />
            <SideBarItem
              name="light-bulb"
              iconOcticon="light-bulb"
              label="Light"
            />
            <SideBarSpace />
            <SideBarSeparator horizontal={horizontal} />
            <SideBarItem
              name="rotate"
              iconOcticon="screen-normal"
              label="Rotate"
            />
            <SideBarItem
              name="settings"
              iconMaterial="settings"
              label="Settings"
            />
          </SideBar>
          <SideBarContent style={{ backgroundColor: '#ccc' }}>
            <View>
              <Text>Hello World</Text>
            </View>
          </SideBarContent>
        </SideBarLayout>
      </>
    </BaraProvider>
  )
}

export default App

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
