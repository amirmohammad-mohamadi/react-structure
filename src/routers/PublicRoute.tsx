import {FC} from 'react'
import {Navigate} from 'react-router-dom'

// constants
import {DASHBOARD_ROUTE} from 'constants/routes'

// hooks
import useUser from 'hooks/useUser'

// components
import PublicLayout from 'pages/public'

interface IProtectedRouteProps {}

const ProtectedRoute: FC<IProtectedRouteProps> = () => {
  const {isLogin} = useUser()

  return !isLogin ? <PublicLayout /> : <Navigate replace to={DASHBOARD_ROUTE} />
}

export default ProtectedRoute
