import React from 'react'
import DailyQuestsLeft from '@/components/molecules/DailyQuestsLeft'
import DailyQuestsRight from '@/components/molecules/DailyQuestsRight'

export type props = {
  className?: string
}

const DailyQuests: React.FC<props> = ({ className }) => {
  return (<div className={'flex justify-between h-full w-full ' + (className || '')}>
    <DailyQuestsLeft title={['Daily', 'Quests']} />
    <DailyQuestsRight />
  </div>)
}

DailyQuests.displayName = 'DailyQuests'
export default DailyQuests