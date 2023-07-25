import React from 'react'

type props = {
  value: number
}

const LineProgress: React.FC<props> = ({  value }) => {
  return (<div className={`rounded-md inline-block w-line-progress h-line-progress bg-line-progress-null`}>
    <div className={`bg-line-progress rounded-md h-line-progress`} style={{ width: value * 100 + '%' }}></div>
  </div>)
}

LineProgress.displayName = 'LineProgress'
export default LineProgress
