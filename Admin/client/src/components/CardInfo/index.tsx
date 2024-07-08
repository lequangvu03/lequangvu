import { cn, formatNumber } from '../../lib/utils'

type CardInfoProps = {
  quantity: number
  icon: string
  title: string
  className?: string
}

function CardInfo({ icon, quantity, title, className }: CardInfoProps) {
  return (
    <div className={cn('h-fit min-w-52 rounded-lg shadow-sm', className)}>
      <div>
        <div>
          <img src={icon} alt='' />
        </div>
        <div className='mt-[15px]'>{title}</div>
      </div>
      <div className='flex items-center justify-end font-bold text-[30px] text-black'>
        <span>{formatNumber(quantity)}</span>
      </div>
    </div>
  )
}

export default CardInfo
