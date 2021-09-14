import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface ButtonProps {
  className?: string | (() => string);
  disabled?: boolean,
  size?: ButtonSize,
  type?: ButtonType,
  children?: React.ReactNode,
  href?: string // 按钮为link类型的时候传入
}

const Button:React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    size,
    type,
    children,
    href
  } = props

  const className = classNames(
    'btn',
    {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      'disabled': (type === 'link') && disabled
    }
  )
  if (type === 'link') {
    return (
      <a href={href} className={ className }>{ children }</a>
    )
  } else {
    return (
      <button className={ className }>{ children }</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button