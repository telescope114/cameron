import React from 'react'

export type props = {
  radius: number,
  children?: React.ReactNode,
  className?: string
}
const CircleBox: React.FC<props> = ({ radius, children, className }) => {
  return (<div className={`rounded-full overflow-hidden inline-block ` + className} style={{ width: radius, height: radius }}>
    { children }
  </div>)
}

CircleBox.displayName = 'CircleBox'
export default CircleBox
