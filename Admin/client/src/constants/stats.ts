import icons from '../assets/icons'

type TStat = {
  id: number
  icon?: string
  title: string
  quantity: number
  backgroundColor?: string
}

const stats: TStat[] = [
  {
    id: 1,
    title: 'Students',
    quantity: 243,
    icon: icons.hat,
    backgroundColor: 'bg-ligt-blue'
  },
  {
    id: 2,
    title: 'Course',
    quantity: 13,
    icon: icons.bookmark,
    backgroundColor: 'bg-light-pink'
  },
  {
    id: 3,
    title: 'Payments',
    quantity: 556_000,
    icon: icons.money,
    backgroundColor: 'bg-light-ivory'
  },
  {
    id: 4,
    title: 'Users',
    quantity: 3,
    icon: icons.user,
    backgroundColor: 'bg-linear'
  }
]

export default stats
