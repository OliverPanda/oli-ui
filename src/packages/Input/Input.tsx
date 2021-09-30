import React from 'react'
import classNames from 'classnames'
import { type } from 'os'


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  addonBefore?: React.ReactNode, // 前置标签, 如前面加价钱符号, 后面加元等
  addonAfter?: React.ReactNode,
  clear: boolean,
  type: string,
  maxLength?: number,
  value?: string,
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement> // onChange事件React.InputHTMLAttributes本身自带
}

function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
}


const Input: React.FC<InputProps> = (props) => {
  const {
    type,
    disabled,
    className,
    ...rest
  } = props
  const classes = classNames(
    'oli-input',
    className,
    {
      [`oli-input-${type}`]: type,
      [`oli-input-${disabled}`]: disabled
    }
  )
  return (
    <input
      className={classes}
      {...rest}
      onChange={handleChange}
    />
  )
}

Input.defaultProps = {
  clear: false,
  type: 'text',
  disabled: false,
}

export default Input