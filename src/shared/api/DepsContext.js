import { createContext, useContext } from "react";

export const DepContext = createContext({})

export const useDeps = () => {
    return useContext(DepContext)
}

export function DepsProvider({children,services}) {
  return (
    <DepContext.Provider value={services}>
        {children}
    </DepContext.Provider>
  )
}
