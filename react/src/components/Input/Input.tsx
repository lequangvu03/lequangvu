import { InputHTMLAttributes, useId } from 'react'
import { cn } from '../../lib/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ placeholder, title, type = 'text', className }: InputProps) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className='block capitalize pb-[10px] text-sm'>
        {title}
      </label>
      <input
        id={id}
        type={type}
        className={cn('outline-none w-full p-[14px] border rounded-md', className)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
