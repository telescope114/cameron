import React, { useMemo } from 'react'

type props = {
  value: string,
  config: Array<{ value: string, title: string }>,
  onChange?: any
}
const Tabs: React.FC<props> = ({ value, config, onChange }) => {
  const tab = useMemo(() => {
    return config.map((item, index) => {
      return (<div
        key={index}
        onClick={() => onChange(item.value)}
        className={`font-button-font cursor-pointer pt-0.5 inline-block leading-button ${index === 0 ? '' : 'ml-10'} ${ item.value === value ? 'text-tabs-active' : 'text-tabs' }`}
      >
        { item.title }
        <div className={`h-0.5 mt-11px rounded-sm ${ item.value === value ? 'bg-tabs-active' : '' }`}></div>
      </div>)
    })
  }, [config, value])
  return (
    <div className={`flex border-b border-tabs`}>
      { tab }
    </div>
  )
}

Tabs.displayName = 'Tabs'
export default Tabs
