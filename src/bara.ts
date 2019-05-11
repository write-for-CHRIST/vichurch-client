import {
  addDebugListener,
  setBarnState,
  useBarn,
  useBarnStream,
  useInitStream,
} from 'bara'
import { useComponentsStream } from 'bara-react'

import { whenSideBarItemPress } from 'bara-react-yofi'
import { useWelcome } from './features/welcome'

export const useStreams = () => {
  useBarnStream({ horizontal: false })
  useInitStream()
  useComponentsStream()
}

export const useTriggers = () => {
  let horizontal = false
  useWelcome()
  useBarn('horizontal', (h: boolean) => {
    horizontal = h
  })
  whenSideBarItemPress('rotate')(() => {
    if (horizontal) {
      setBarnState('horizontal', false)
    } else {
      setBarnState('horizontal', true)
    }
  })
}

export default () => {
  useStreams()
  useTriggers()
}
