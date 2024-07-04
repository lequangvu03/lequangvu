import { cn, formatNumber } from '../../lib/utils'

type CardInfoProps = {
  quantity: number
  icon: string
  title: string
  className?: string
}

function CardInfo({ icon, quantity, title, className }: CardInfoProps) {
  return (
    <div className={cn('min-w-52 h-fit rounded-lg shadow-sm', className)}>
      <div>
        <div>
          <img src={icon} alt='' />
        </div>
        <div className='mt-[15px]'>{title}</div>
      </div>
      <div className='font-bold text-black text-[30px] flex justify-end items-center'>
        <span>{formatNumber(quantity)}</span>
      </div>
    </div>
  )
}

export default CardInfo
