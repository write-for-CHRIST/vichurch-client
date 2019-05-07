import { setBarnState } from 'bara'
import { useBarnState } from 'bara-react'
import { useEffect } from 'react'
import { Dimensions } from 'react-native'

export const BARN_REACT_DIMENSIONS_KEY = 'dev.barajs.react.dimensions'
export const BARN_REACT_ORIENTATION_KEY = 'dev.barajs.react.orientation'

export function useDimensions() {
  const [dimensions, setDimensions] = useBarnState(BARN_REACT_DIMENSIONS_KEY, {
    screen: Dimensions.get('screen'),
    window: Dimensions.get('window'),
  })

  useEffect(() => {
    Dimensions.addEventListener('change', setDimensions)
    return () => Dimensions.removeEventListener('change', setDimensions)
  }, [])

  return dimensions
}

export function useOrientation() {
  const dimensions = useDimensions()
  const [orientation] = useBarnState(BARN_REACT_ORIENTATION_KEY, {
    portrait: true,
    landscape: false,
  })
}
