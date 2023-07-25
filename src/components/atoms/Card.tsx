import React from 'react'

type props = {
  children?: React.ReactNode,
  width?: number | string,
  height?: number | string
}
const Card: React.FC<props> = ({ children }) => {
  return <div className={'bg-card rounded-card inline-block'}>
    { children }
  </div>
}

Card.displayName = 'Card'
export default Card
