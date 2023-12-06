import React, {useState} from 'react'
import Context from './context'

interface IUserProvider {
  children: React.ReactNode
}

const UserProvider: React.FC<IUserProvider> = ({children}) => {
  const [isLogin, setIsLogin] = useState(false)

  return <Context.Provider value={{isLogin}}>{children}</Context.Provider>
}

export default UserProvider
