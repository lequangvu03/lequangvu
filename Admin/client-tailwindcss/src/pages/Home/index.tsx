import CardInfo from '../../components/CardInfo'
import stats from '../../constants/stats'

function Home() {
  return (
    <div className='h-[1000px] p-[30px]'>
      <div className='grid-auto-fit grid gap-[30px]'>
        {stats.map(({ id, quantity, title, icon, backgroundColor }) => (
          <CardInfo key={id} className={`${backgroundColor} p-[20px]`} icon={icon!} quantity={quantity} title={title} />
        ))}
      </div>
    </div>
  )
}

export default Home
