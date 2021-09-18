import React from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from 'oli-ui'

export interface MenuItemProps {
  disabled?: boolean,
  icon?: IconProp,
  key?: string,
  title?: string,
  className?: string,
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { disabled, className, style, children, icon } = props
  const classes = classNames(
    'menu-item',
    className,
    {
      'disabled': disabled
    }
  )
  const iconNode = icon && (<Icon icon={icon} />)
  return (
    <li
      className={ classes }
      style={ style }
    >
      { iconNode }
      { children }
    </li>
  )
}

export default MenuItem