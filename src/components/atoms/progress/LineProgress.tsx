import React from 'react'

export type props = {
  value: number,
  className?: string
}

const LineProgress: React.FC<props> = ({  value, className }) => {
  return (<div className={`rounded-md inline-block w-line-progress h-line-progress bg-line-progress-null ` + className}>
    <div className={`bg-line-progress rounded-md h-line-progress`} style={{ width: value * 100 + '%' }}></div>
  </div>)
}

LineProgress.displayName = 'LineProgress'
export default LineProgress
