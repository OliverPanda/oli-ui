import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconSize = 'lg' | 'sm'
export type IconTheme = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  theme?: IconTheme
}

const Icon:React.FC<IconProps> = props => {
  const { className, theme, ...restProps } = props
  const classes = classNames(
    'oli-icon',
    className,
    {
      [`icon-${theme}`]: theme
    }
  )
  return (
    <FontAwesomeIcon className={ classes } { ...restProps } />
  )
}

export default Icon