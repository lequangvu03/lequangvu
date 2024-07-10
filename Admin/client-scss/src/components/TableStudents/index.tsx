import { Table, TableProps, Pagination, Popconfirm } from 'antd'
import { TStudent } from '../../../types/students'
import icons from '../../assets/icons'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
import images from '../../assets/images'

const cx = classNames.bind(styles)

type TableStudentsProps = {
  students: TStudent[]
}

interface DataType {
  key: React.Key
  id: string
  image: string
  name: string
  email: string
  phone: string
  enrollNumber: string
  dateOfAdmission: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '',
    dataIndex: 'image',
    render: (url) => (
      <div className={cx('avatar__wrapper')}>
        <img src={url} className={cx('avatar__image')} alt='avatar' />
      </div>
    )
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Phone',
    dataIndex: 'phone'
  },
  {
    title: 'Enroll Number',
    dataIndex: 'enrollNumber'
  },
  {
    title: 'Date of admission',
    dataIndex: 'dateOfAdmission'
  },
  {
    title: '',
    dataIndex: 'id',
    render: (id) => (
      <div className={cx('table__actions')}>
        <button className={cx('button button__edit')}>
          <img src={icons.pen} />
        </button>
        <Popconfirm
          title='Delete the student'
          description='Are you sure to delete this student?'
          onConfirm={async () => {
            console.log('Delete student ' + id)
          }}
          onCancel={() => {}}
          okText='Yes'
          cancelText='No'
        >
          <button className={cx('button button__detete')}>
            <img src={icons.trash} />
          </button>
        </Popconfirm>
      </div>
    ),
    fixed: 'right'
  }
]

const dataSource: DataType[] = [
  {
    key: '1',
    id: '1',
    image: images.avatar,
    name: 'Karthi',
    email: 'karthi@gmmail.com',
    phone: '7305477760',
    enrollNumber: '1234567305477760',
    dateOfAdmission: '08-Dec, 2021'
  },
  {
    key: '2',
    id: '2',
    image: images.avatar,
    name: 'Vu',
    email: 'karthi@gmmail.com',
    phone: '7305477760',
    enrollNumber: '1234567305477760',
    dateOfAdmission: '08-Dec, 2021'
  }
]

function TableStudents({ students }: TableStudentsProps) {
  return (
    <div>
      <div className={cx('table__header-wrapper')}>
        <header className={cx('table__header')}>
          <h2 className={cx('table__name')}>Students List</h2>
          <div className={cx('actions__wrapper')}>
            <button className={cx('button__sort')}>
              <img src={icons.sort} alt='icon' />
            </button>
            <button type='submit' className={cx('button__add')}>
              ADD NEW STUDENT
            </button>
          </div>
        </header>
      </div>
      <div className={cx('table__wrapper')}>
        <Table dataSource={dataSource} columns={columns} pagination={false} showSorterTooltip={false} />
        <Pagination defaultCurrent={1} total={50} align='end' className={cx('pagination')} />
      </div>
    </div>
  )
}

export default TableStudents
