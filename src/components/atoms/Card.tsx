import React from 'react'

export type props = {
  className?: string,
  children?: React.ReactNode,
  width?: number | string,
  height?: number | string
}
const Card: React.FC<props> = ({ children, className, width, height }) => {
  return <div className={'bg-card rounded-card inline-block ' + className} style={{ width, height }}>
    { children }
  </div>
}

Card.displayName = 'Card'
export default Card
