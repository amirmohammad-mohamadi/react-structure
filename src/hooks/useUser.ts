import {useContext} from 'react'
//contexts
import context from 'providers/user/context'

const useUser = () => useContext(context)

export default useUser
