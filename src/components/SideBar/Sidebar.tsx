import { Text } from 'bara-react'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import { sidebarSize } from '../variables'
import { styles } from './styles'

export interface SideBarProps {
  children?: ReactNode
  horizontal?: boolean
}

export const SideBar = ({ children, horizontal = true }: SideBarProps) => {
  return (
    <View style={{ zIndex: 1000 }}>
      <View
        style={[
          styles.sideBar,
          {
            flexDirection: horizontal ? 'row' : 'column',
            width: horizontal ? '100%' : sidebarSize,
            height: horizontal ? sidebarSize : '100%',
          },
        ]}
      >
        {children}
      </View>
    </View>
  )
}
