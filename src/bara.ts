import { useInitStream } from 'bara'
import { useComponentsStream } from 'bara-react'

import { whenSideBarItemPress } from './components/SideBar'
import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useInitStream()
  useComponentsStream()
}

export const useTriggers = () => {
  useWelcome()
  whenSideBarItemPress('settings')(() => {
    alert('Setting Pressed!')
  })
}

export default () => {
  useStreams()
  useTriggers()
}
