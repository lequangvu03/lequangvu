import { useQuery } from '@tanstack/react-query'
import TableStudents from '../../components/TableStudents'
import http from '../../lib/http'
import { TStudent } from '../../../types/students'

function Students() {
  const { data } = useQuery({
    queryKey: ['Students'],
    queryFn: () => http.get('/students')
  })
  console.log(data)

  return (
    <div className='min-h-screen bg-[#F8F8F8] px-[30px]'>
      <TableStudents students={data?.data.data as TStudent[]} />
    </div>
  )
}

export default Students
