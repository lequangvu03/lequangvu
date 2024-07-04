import { useRoutes } from 'react-router-dom'
import routes from './config/routes'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import SignIn from './pages/SignIn'
import MainLayout from './layouts/MainLayout'
import Student from './pages/Students'
import Payment from './pages/Payment'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Report from './Report'
import Course from './pages/Course'

function App() {
  const elements = useRoutes([
    {
      path: routes.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: routes.signin,
      element: (
        <AuthLayout>
          <SignIn />
        </AuthLayout>
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
  ])
  return <div>{elements}</div>
}

export default App
