import React from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

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

  const isLink = type === ButtonType.Link

  const className = classNames(
    'btn',
    {
      [`bg-${type}`]: type,
      [`btn-${size}`]: size,
      'disabled': isLink && disabled
    }
  )
  if (isLink) {
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
  type: ButtonType.Default
}

export default Button