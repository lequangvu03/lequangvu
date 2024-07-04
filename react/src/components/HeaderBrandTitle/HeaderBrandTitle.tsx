import { cn } from '../../lib/utils'

type HeaderBrandTitleProps = {
  className?: string
  label: string
}

function HeaderBrandTitle({ className, label }: HeaderBrandTitleProps) {
  return (
    <h2
      className={cn(
        'text-[32px] pl-[12.5px] border-l-[6px] border-[#F8D442] leading-none uppercase font-bold text-black flex items-center text-nowrap',
        className
      )}
    >
      <span>{label}</span>
    </h2>
  )
}

export default HeaderBrandTitle
