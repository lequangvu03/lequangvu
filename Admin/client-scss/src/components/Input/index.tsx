import { InputHTMLAttributes, useId } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

type InputProps = InputHTMLAttributes<HTMLInputElement>

function Input({ placeholder, title, type = 'text', className }: InputProps) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className={cx('field__label')}>
        {title}
      </label>
      <input id={id} type={type} className={cx('field__input', className)} placeholder={placeholder} />
    </div>
  )
}

export default Input
