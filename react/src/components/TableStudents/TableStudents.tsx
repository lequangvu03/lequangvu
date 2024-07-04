import { TStudent } from '../../../types/students'
import icons from '../../assets/icons'

type TableStudentsProps = {
  students: TStudent[]
}

function TableStudents({ students }: TableStudentsProps) {
  return (
    <div>
      <div className='flex items-center justify-between py-[12px] border-b'>
        <h2 className='text-[22px] font-bold'>Students List</h2>
        <div className='flex items-center'>
          <button>
            <img src={icons.sort} alt='' />
          </button>
          <button
            type='submit'
            className='ml-[30px] px-[26px] text-white block text-sm py-[14px] w-full rounded bg-primary uppercase text-center'
          >
            ADD NEW STUDENT
          </button>
        </div>
      </div>
      <table className='border-separate border-spacing-y-[10px] w-full text-left border-none border-t'>
        <tr className='text-xs font-semibold text-[#ACACAC]'>
          <th></th>
          <th>
            <span className='block py-[22px]'>Name</span>
          </th>
          <th>
            <span className='block py-[22px]'>Email</span>
          </th>
          <th>
            <span className='block py-[22px]'>Phone</span>
          </th>
          <th>
            <span className='block py-[22px]'>Enroll Number</span>
          </th>
          <th>
            <span className='block py-[22px]'>Date of admission</span>
          </th>
          <th></th>
        </tr>
        {students.map((student) => (
          <tr key={student.id} className='mb-[10px] bg-white rounded-lg text-sm'>
            <td>
              <div className='py-[15px] pl-[13px]'>
                <img
                  src={student.avatar}
                  className='h-[55px] w-[65px] object-cover rounded-lg overflow-hidden'
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
                <button>
                  <img src={icons.pen} />
                </button>
                <button>
                  <img src={icons.trash} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default TableStudents
