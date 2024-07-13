import { IUser } from '../types/types'
import { getAccessTokenFromLocalStorage, getProfileFromLocalStorage } from '../lib/utils'
import { createContext, ReactNode, useState } from 'react'

export interface IAppContext {
  isAuthenticated: boolean
  profile: IUser | null
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  reset: () => void
}

const initialState: IAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLocalStorage()),
  profile: getProfileFromLocalStorage(),
  setIsAuthenticated: () => null,
  setProfile: () => null,
  reset: () => null
}

export const AppContext = createContext(initialState)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState.isAuthenticated)
  const [profile, setProfile] = useState<IUser | null>(initialState.profile)

  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
  }
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        profile,
        setIsAuthenticated,
        setProfile,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
