import React from 'react'
import classNames from 'classnames'
import { Icon } from 'oli-ui'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface ButtonProps {
  className?: string | (() => string);
  disabled?: boolean,
  size?: ButtonSize,
  type?: ButtonType,
  children?: React.ReactNode,
  href?: string, // 按钮为link类型的时候传入
  icon?: IconProp
}

const Button:React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    size,
    type,
    children,
    href,
    icon
  } = props

  const className = classNames(
    'btn',
    {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      'disabled': (type === 'link') && disabled,
    }
  )
  const iconNode = icon && (<Icon icon={icon} />)
  // 给纯文字的children加上span, 使得icon能通过:not(:only-child)加margin-right
  const kids = children && (<span>{ children }</span>)
  if (type === 'link') {
    return (
      <a
        href={href}
        className={ className }
      >
        { iconNode }
        { kids }

      </a>
    )
  } else {
    return (
      <button
        className={ className }
        disabled={ disabled }
      >
        { iconNode }
        { kids }
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button