import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  size?: 'fullWidth' | 'large' | 'medium' | 'small'
  buttonStyle?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  value,
  size = 'medium',
  buttonStyle = 'primary',
  type = 'button',
  className,
  disabled,
  onClick,
}: IButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(styles.button, styles[size], styles[buttonStyle], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button
