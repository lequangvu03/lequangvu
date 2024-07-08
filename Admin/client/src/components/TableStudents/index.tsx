import { useMemo, useState } from 'react'
import { TStudent } from '../../../types/students'
import icons from '../../assets/icons'

type TableStudentsProps = {
  students: TStudent[]
}

const COLUMN_NAMES: {
  id: keyof TStudent
  label: string
}[] = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'email',
    label: 'Email'
  },
  {
    id: 'phone',
    label: 'Phone'
  },
  {
    id: 'enrollNumber',
    label: 'Enroll Number'
  },
  {
    id: 'dateOfAdmission',
    label: 'Date of admission'
  }
]

function TableStudents({ students }: TableStudentsProps) {
  const [sort, setSort] = useState<{ direction: 'dec' | 'asc'; col: keyof TStudent } | null>(null)

  const sortedStudents = useMemo(() => {
    if (sort !== null && students) {
      return students.sort((student1, student2) => {
        const value1 = student1[sort.col]
        const value2 = student2[sort.col]
        if (typeof value1 === 'string' && typeof value2 === 'string') {
          return sort.direction === 'asc' ? value1.localeCompare(value2) : value2.localeCompare(value1)
        } else if (typeof value1 === 'number' && typeof value2 === 'number') {
          return sort.direction === 'asc' ? value1 - value2 : value2 - value1
        }
        return 0
      })
    }

    return students
  }, [sort, students])
  console.log('Test', sortedStudents)

  const toggleSort = (colName: keyof TStudent) => {
    let direction = 'asc' as 'dec' | 'asc'
    if (sort && sort?.direction === 'asc' && sort?.col === colName) {
      direction = 'dec'
      setSort({
        direction: direction,
        col: colName
      })
    }

    setSort({
      direction: direction,
      col: colName
    })
  }
  console.log(sort)
  return (
    <div>
      <div className='flex items-center justify-between border-b py-[12px]'>
        <h2 className='font-bold text-[22px]'>Students List</h2>
        <div className='flex items-center'>
          <button>
            <img src={icons.sort} alt='' />
          </button>
          <button
            type='submit'
            className='ml-[30px] block w-full rounded bg-primary px-[26px] py-[14px] text-center text-sm uppercase text-white'
          >
            ADD NEW STUDENT
          </button>
        </div>
      </div>
      <div className='max-w-full overflow-auto'>
        <table className='w-full border-separate border-spacing-y-[10px] border-t border-none text-left'>
          <tr className='text-xs font-semibold text-[#ACACAC]'>
            <th></th>
            {COLUMN_NAMES.map(({ id, label }) => (
              <th key={id} className='cursor-pointer' onClick={() => toggleSort(id)}>
                <span className='group flex w-full items-center gap-2 py-[22px]'>
                  {label}
                  <img src={icons.sort} alt='' width={10} className='invisible group-hover:visible' />
                </span>
              </th>
            ))}

            <th></th>
          </tr>
          {sortedStudents?.map((student) => (
            <tr key={student.id} className='mb-[10px] rounded-lg bg-white text-sm'>
              <td>
                <div className='py-[15px] pl-[13px] pr-8'>
                  <img
                    src={student.avatar}
                    className='h-[55px] w-[65px] overflow-hidden rounded-lg object-cover'
                    alt=''
                  />
                </div>
              </td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.enrollNumber}</td>
              <td>{student.dateOfAdmission}</td>
              <td>
                <div className='flex items-center gap-[33px]'>
                  <button className='shrink-0'>
                    <img src={icons.pen} />
                  </button>
                  <button className='shrink-0'>
                    <img src={icons.trash} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default TableStudents
