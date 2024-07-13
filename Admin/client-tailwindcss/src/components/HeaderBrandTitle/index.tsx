import { cn } from '../../lib/utils'

type HeaderBrandTitleProps = {
  className?: string
  label: string
}

function HeaderBrandTitle({ className, label }: HeaderBrandTitleProps) {
  return (
    <h2
      className={cn(
        'flex items-center text-nowrap border-l-[6px] border-[#F8D442] pl-[12.5px] font-bold text-[32px] uppercase leading-none text-black',
        className
      )}
    >
      <span>{label}</span>
    </h2>
  )
}

export default HeaderBrandTitle
