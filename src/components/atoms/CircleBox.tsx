import React from 'react'

type props = {
  radius: number,
  children?: React.ReactNode
}
const CircleBox: React.FC<props> = ({ radius, children }) => {
  return (<div className={`rounded-full overflow-hidden inline-block`} style={{ width: radius, height: radius }}>
    { children }
  </div>)
}

CircleBox.displayName = 'CircleBox'
export default CircleBox
