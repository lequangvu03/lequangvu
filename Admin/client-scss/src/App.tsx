import { Navigate, Outlet, useLocation, useRoutes } from 'react-router-dom'
import routes from './config/routes'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/SignIn'
import MainLayout from './layouts/MainLayout'
import Student from './pages/Students'
import Payment from './pages/Payment'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Report from './pages/Report'
import Course from './pages/Course'
import useAuth from './hooks/useAuth'

function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to={routes.signin}
      state={{
        from: location
      }}
      replace
    />
  )
}

function RejectedRoute() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to={routes.home} /> : <Outlet />
}

function App() {
  const elements = useRoutes([
    {
      path: routes.home,
      element: <ProtectedRoute />,
      children: [
        {
          path: routes.home,
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        },
        {
          path: routes.course,
          element: (
            <MainLayout>
              <Course />
            </MainLayout>
          )
        },
        {
          path: routes.students,
          element: (
            <MainLayout>
              <Student />
            </MainLayout>
          )
        },
        {
          path: routes.payment,
          element: (
            <MainLayout>
              <Payment />
            </MainLayout>
          )
        },
        {
          path: routes.settings,
          element: (
            <MainLayout>
              <Settings />
            </MainLayout>
          )
        },
        {
          path: routes.report,
          element: (
            <MainLayout>
              <Report />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: routes.home,
      element: <RejectedRoute />,
      children: [
        {
          path: routes.signin,
          element: (
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          )
        }
      ]
    }
  ])
  return <div>{elements}</div>
}

export default App
