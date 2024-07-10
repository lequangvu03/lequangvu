import icons from '../assets/icons'
import routes from '../config/routes'

type TNavLink = {
  id: number
  icon?: string
  label: string
  to: string
}

const navlinks: TNavLink[] = [
  {
    id: 1,
    label: 'Home',
    to: routes.home,
    icon: icons.home
  },
  {
    id: 2,
    label: 'Course',
    to: routes.course,
    icon: icons.course
  },
  {
    id: 3,
    label: 'Students',
    to: routes.students,
    icon: icons.student
  },
  {
    id: 4,
    label: 'Payment',
    to: routes.payment,
    icon: icons.payment
  },
  {
    id: 5,
    label: 'Report',
    to: routes.report,
    icon: icons.report
  },
  {
    id: 6,
    label: 'Settings',
    to: routes.settings,
    icon: icons.settings
  }
]

export default navlinks
