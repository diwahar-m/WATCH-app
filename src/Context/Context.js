import React from 'react'

const Context = React.createContext({
  cartList: [],
  isTheme: false,
  ThemeIsClicked: () => {},
  addSaveItems: () => {},
})

export default Context
