import {FC} from 'react'
import {Navigate} from 'react-router-dom'

// hooks
import useUser from 'hooks/useUser'

// constants
import {LOGIN_ROUTE} from 'constants/routes'

// components
import ProtectedLayout from 'pages/protected/index'

interface IProtectedRouteProps {}

const ProtectedRoute: FC<IProtectedRouteProps> = () => {
  const {isLogin} = useUser()

  return isLogin ? <ProtectedLayout /> : <Navigate replace to={LOGIN_ROUTE} />
}

export default ProtectedRoute
