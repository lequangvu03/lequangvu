import TableStudents from '../../components/TableStudents'
import students from '../../constants/students'

function Students() {
  return (
    <div className='min-h-screen px-[30px] bg-[#F8F8F8]'>
      <TableStudents students={students} />
    </div>
  )
}

export default Students
