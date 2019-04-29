import {
  BaraReactTouchableOpacity,
  Text,
  TouchableOpacity,
  View,
} from 'bara-react'
import { MaterialIcons, Octicons } from 'bara-react-icons/es'
import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

import { styles } from './styles'

export interface SideBarItemProps extends BaraReactTouchableOpacity {
  iconOcticon?: string
  iconMaterial?: string
  label?: string
  style?: any
}

export const SideBarItem = ({
  iconMaterial,
  iconOcticon,
  label,
  style,
  ...props
}: SideBarItemProps) => {
  const hasLabel = !!label
  let iconName = iconMaterial
  iconName = iconName || iconOcticon
  iconName = iconName || 'block'
  return (
    <TouchableOpacity
      kind="sidebar-button"
      style={[styles.sideBarItem as ViewStyle, style]}
      {...props}
    >
      <View kind="sidebar-view">
        {iconMaterial && (
          <MaterialIcons
            name={iconMaterial}
            size={30}
            style={styles.sideBarIcon as ViewStyle}
          />
        )}
        {hasLabel && (
          <Text style={styles.sideBarItemLabel as TextStyle}>{label}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
