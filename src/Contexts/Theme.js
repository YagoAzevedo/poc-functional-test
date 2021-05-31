import React, { useContext, createContext } from "react";

const Theme = createContext();

function useTheme() {
  const context = useContext(Theme)
  if (context === undefined) {
    throw new Error('must be used within a provider')
  }
  return context
}

function ThemeProvider({children}) {
  const value = {color:'#fff'}
  return (
    <Theme.Provider value={value}>
      {children}
    </Theme.Provider>)
}

export {ThemeProvider, useTheme}