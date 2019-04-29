import { and } from 'bara'
import {
  kindOfTouchableOpacity,
  nameOfTouchableOpacity,
  whenTouchableOpacityPress,
} from 'bara-react'

export const whenSideBarItemPress = (name?: string) => (
  callback: (...args: any[]) => void,
) => {
  return whenTouchableOpacityPress(
    and(
      kindOfTouchableOpacity('sidebar-button'),
      nameOfTouchableOpacity(name!),
    ),
  )(callback)
}
