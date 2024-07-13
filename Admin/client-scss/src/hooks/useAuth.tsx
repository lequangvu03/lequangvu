import { useContext } from 'react'
import { AppContext, IAppContext } from '../contexts/app.context'

function useAuth() {
  const values = useContext<IAppContext>(AppContext)
  return values
}

export default useAuth
