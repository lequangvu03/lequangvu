import TablePayment from '../../components/TablePayment'
import payments from '../../constants/payments'

function Payment() {
  return (
    <div className='min-h-screen px-[30px] bg-[#F8F8F8]'>
      <TablePayment payments={payments} />
    </div>
  )
}

export default Payment
