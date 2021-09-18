
import classNames from 'classnames'
import React from 'react'
import MenuContext, { MenuContextProps, OnSelectCallback } from './MenuContext'
export type Mode = 'vertical' | 'horizontal'
export interface MenuProps {
  mode: Mode,
  activeIndex?: number,
  className?: string,
  style?: React.CSSProperties,
  onSelect?: OnSelectCallback
}

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    style,
    activeIndex,
    children,
    mode
  } = props
  const classes = classNames(
    'menu',
    className,
    { 'menu-vertical' : mode === 'vertical' }
  )
  return (
    <ul
      className={ classes }
      style={ style }
    >
      { children }
    </ul>
  )
}

Menu.defaultProps = {
  mode: 'vertical',
  activeIndex: 0
}

export default Menu