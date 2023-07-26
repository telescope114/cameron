import React from 'react'

export type props = {
  children?: React.ReactNode,
  onClick?: () => any,
  disabled?: boolean,
  type?: 'default' | 'primary',
  className?: string,
  widthFull?: boolean,
  ghost?: boolean
}

const getClasses = ({ disabled, type, ghost }: props): string => {
  let out = 'py-3 rounded-md font-button-font text-button leading-button font-normal '
  if (disabled) out += 'px-6 bg-disabled text-disabled cursor-not-allowed '
  else if (type === 'primary') out += 'px-6 bg-primary text-primary cursor-pointer '
  else if (type === 'default') out += 'px-6 bg-button-default text-default cursor-pointer '
  else if (ghost) out += 'bg-transparent text-ghost border-1px border-ghost cursor-pointer rounded-xl '
  else out += 'px-6 bg-button-default text-default cursor-pointer '
  return out
}

const Button: React.FC<props> = (props) => {
  return (<button onClick={props.onClick} className={(props.widthFull ? 'w-full ' : '') + getClasses(props) + props.className} disabled={props.disabled}>
    { props.children }
  </button>)
}

Button.displayName = 'Button'
export default Button
