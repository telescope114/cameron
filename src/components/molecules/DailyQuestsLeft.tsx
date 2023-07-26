import React, { useMemo } from 'react'

export type props = {
  title?: string | string[]
}
const DailyQuestsLeft: React.FC<props> = ({ title }) => {
  const titleDom: React.ReactNode = useMemo(() => {
    if (Array.isArray(title)) return title.map((item, index) => (
      <div key={index} className={'text-base leading-4'}>{ item }</div>
    ))
    else return (<div className={'text-base leading-4'}>{ title }</div>)
  }, [title])
  return (<div className={'relative flex-initial mr-4'}>
    <div className="absolute mt-10 ml-7 font-button-font text-default font-bold">
      { titleDom }
    </div>
    <svg width="189" height="220" viewBox="0 0 189 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z" fill="#1C1C1C"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M141.739 172.203L128.78 220H20C8.9543 220 0 211.046 0 200V122.262C15.0458 111.4 33.5254 105 53.5 105C95.6215 105 131.095 133.462 141.739 172.203Z" fill="#232323"/>
    </svg>
  </div>)
}

DailyQuestsLeft.displayName = 'DailyQuestsLeft'
export default DailyQuestsLeft
