import {
  columnHeaderItemContentSize,
  contentPadding,
  sidebarSize,
} from '../variables'

export const sharedStyles = {
  sideBar: {
    flexGrow: 1,
    backgroundColor: '#ccc',
  },
  sideBarItem: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: sidebarSize,
    height: '100%',
    overflow: 'hidden',
  },
  sideBarIcon: {
    textAlign: 'center',
    fontSize: columnHeaderItemContentSize,
  },
  sideBarItemLabel: {
    fontSize: 10,
  },
}
