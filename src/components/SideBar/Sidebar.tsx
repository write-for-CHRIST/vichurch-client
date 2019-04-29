import { BaraReactView, Text, View } from 'bara-react'
import React, { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

import { sidebarSize } from '../variables'
import { styles } from './styles'

export type SideBarDynamicSide = 'top' | 'bottom' | 'left' | 'right'
export interface SideBarProps extends BaraReactView {
  children?: ReactNode
  side?: string
  horizontal?: boolean
  horizontalSide?: SideBarDynamicSide
  verticalSide?: SideBarDynamicSide
}

interface DynamicPreset {
  [k: string]: {
    wrap: any
    inner: any
  }
}

const dynamicPreset: DynamicPreset = {
  bottom: {
    wrap: {
      bottom: 0,
      left: 0,
      right: 0,
    },
    inner: {
      flexDirection: 'row',
      height: sidebarSize,
    },
  },
  left: {
    wrap: {
      top: 0,
      bottom: 0,
      left: 0,
    },
    inner: {
      flexDirection: 'column',
      width: sidebarSize,
    },
  },
}

dynamicPreset.top = {
  ...dynamicPreset.bottom,
  ...{ wrap: { top: 0, left: 0, right: 0 } },
}

dynamicPreset.right = {
  ...dynamicPreset.left,
  ...{ wrap: { top: 0, bottom: 0, right: 0 } },
}

export const SideBar = ({
  children,
  horizontalSide,
  verticalSide,
  horizontal = true,
  ...props
}: SideBarProps) => {
  const currentSide = horizontal ? horizontalSide! : verticalSide!
  return (
    <View
      kind="sidebar-container"
      style={[
        styles.sideBarPosition as ViewStyle,
        {
          ...(dynamicPreset[currentSide].wrap as ViewStyle),
        },
      ]}
      {...props}
    >
      <View
        style={[
          styles.sideBar as ViewStyle,
          {
            ...(dynamicPreset[currentSide].inner as ViewStyle),
          },
        ]}
      >
        {children}
      </View>
    </View>
  )
}
