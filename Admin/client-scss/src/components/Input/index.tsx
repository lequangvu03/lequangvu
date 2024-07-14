import { Flex, Input as AntdInput, Typography } from 'antd'
import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { Control, Controller } from 'react-hook-form'
const cx = classNames.bind(styles)

interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  placeholder?: string
  label?: string
  message?: string
}

function Input({ control, placeholder, name, label, message }: InputProps) {
  return (
    <Flex vertical>
      <Typography.Paragraph className={cx('field__label')}>{label}</Typography.Paragraph>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <AntdInput {...field} className={cx('field__input')} placeholder={placeholder} />}
      />
      <span className={cx('message__error')}>{message}</span>
    </Flex>
  )
}

export default Input
