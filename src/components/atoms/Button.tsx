import React from 'react'

export type props = {
  children?: React.ReactNode,
  onClick?: () => any,
  disabled?: boolean,
  type?: 'default' | 'primary',
  className?: string
}

const getClasses = ({ disabled, type, className }: props): string => {
  let out = 'px-6 py-3 rounded-md font-button-font text-button leading-button font-normal '
  if (disabled) out += 'bg-disabled text-disabled cursor-not-allowed'
  else if (type === 'primary') out += 'bg-primary text-primary cursor-pointer'
  else out += 'bg-button-default text-default cursor-pointer'
  return out + className
}

const Button: React.FC<props> = (props) => {
  return (<button onClick={props.onClick} className={getClasses(props)} disabled={props.disabled}>
    { props.children }
  </button>)
}

Button.displayName = 'Button'
export default Button
