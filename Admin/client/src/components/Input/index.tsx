import { InputHTMLAttributes, useId } from 'react'
import { cn } from '../../lib/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ placeholder, title, type = 'text', className }: InputProps) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className='block pb-[10px] text-sm capitalize'>
        {title}
      </label>
      <input
        id={id}
        type={type}
        className={cn('w-full rounded-md border p-[14px] outline-none', className)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
