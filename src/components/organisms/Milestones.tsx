import React, { useState } from 'react'
import Tabs from '../atoms/Tabs'
import { tabsConfig, listConfig } from '../hooks/milestones'
import List from "@/components/atoms/List";

export type props = {
  className?: string
}
const Milestones: React.FC<props> = ({ className }) => {
  const [tabs, setTabs] = useState<string>('1')

  return (<div className={'h-full w-full pt-10 pl-7 pr-14 ' + (className || '') }>
    <div className="title flex justify-between">
      <div className={'font-button-font font-bold text-base leading-4 text-default'}>Milestones</div>
      <Tabs value={ tabs } config={ tabsConfig } onChange={ setTabs } />
    </div>
    <List config={listConfig} className={'h-45 mt-8'} />
  </div>)
}

Milestones.displayName = 'Milestones'
export default Milestones
