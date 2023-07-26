import React from 'react'
import CircleBox from '@/components/atoms/CircleBox'

export type props = {
  username: string,
  level: string
}
const UserInfo: React.FC<props> = ({ username, level }) => {
  return (
    <div className="user-info mx-10">
      <CircleBox radius={102} className={'mx-2'} ><div className="w-full h-full bg-user-info-main" /></CircleBox>
      <div className="user-info-detail mt-5">
        <div className="user-info-name font-bold text-xl font-button-font leading-5 text-user-info-main text-center" >{ username }</div>
        <div className="user-info-level flex justify-between mt-3 mx-1">
          <div className={'flex'}>
            <CircleBox radius={20} ><div className="w-full h-full bg-user-info-main" /></CircleBox>
            <div className={'text-user-info-main font-button-font ml-2'}>{ level }</div>
          </div>
          <CircleBox radius={20} className={'text-user-info-others border border-user-info-others'} ><div className="w-full h-full text-center text-xs leading-5">?</div></CircleBox>
        </div>
      </div>
    </div>
  )
}

UserInfo.displayName = 'UserInfo'
export default UserInfo
