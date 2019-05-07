import React, { useContext } from 'react'

export type OrientationType = 'landscape' | 'portrait'

export interface LayoutProviderState {
  appOrientation: OrientationType
  deviceOrientation: OrientationType
}

// export const LayoutContext = React.createContext<LayoutProviderState>(
// getLayoutState(),
// )

// export const getLayoutState = () => {
// const appOrientation = 'landscape'
// const deviceOrientation = 'landscape'
// return { appOrientation, deviceOrientation }
// }
