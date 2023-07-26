import React, { useMemo } from 'react'
import CircleBox from '../atoms/CircleBox'
import Button from '../atoms/Button'

export type props = {
  xp: Array<{ title: string, value: string }>
}
const UserOthers: React.FC<props> = ({ xp }) => {
  const xpDom = useMemo(() => {
    return xp.map((item, index) => {
      return (
        <div className={'text-center'} key={index}>
          <div className="level-title text-xs text-user-level-title font-button-font">{ item.title }</div>
          <div className="level-title text-base leading-4 font-button-font font-bold text-default mt-3">{ item.value }</div>
        </div>
      )
    })
  }, [xp])
  return (<div className={''}>
    <div className="mt-14 flex justify-between">
      { xpDom[0] }
      { xpDom[1] }
    </div>
    <div className={'relative flex mt-14'} style={{ marginLeft: 11, marginRight: 11 }}>
      <CircleBox className={'mt-3.5'} radius={69}><div className={'w-full h-full'} style={{ backgroundColor: '#444444' }}/></CircleBox>
      <CircleBox className={'mt-3.5 ml-11.5'} radius={69}><div className={'w-full h-full'} style={{ backgroundColor: '#444444' }}/></CircleBox>
      <CircleBox className={'absolute left-11.5'} radius={92}><div className={'w-full h-full bg-user-info-main'} /></CircleBox>
    </div>
    <div className={'mt-6 mx-7'}>
      <Button>View all badges</Button>
    </div>
  </div>)
}

UserOthers.displayName = 'UserOthers'
export default UserOthers
