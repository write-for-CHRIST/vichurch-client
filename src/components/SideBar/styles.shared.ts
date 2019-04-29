import {
  columnHeaderItemContentSize,
  contentPadding,
  sidebarSize,
} from '../variables'

export const sharedStyles = {
  sideBarPosition: {
    zIndex: 1000,
    position: 'absolute',
    backgroundColor: '#ccc',
  },
  sideBar: {
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  sideBarItem: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: sidebarSize,
    height: sidebarSize,
    overflow: 'hidden',
    paddingLeft: 8,
    paddingRight: 8,
  },
  sideBarIcon: {
    textAlign: 'center',
    fontSize: columnHeaderItemContentSize,
  },
  sideBarItemLabel: {
    fontSize: 10,
  },
}
