import React from 'react'
import UserInfo, { type props as userInfoProps } from '../molecules/UserInfo'
import UserOthers, { type props as userOthersProps } from '../molecules/UserOthers'

const UserCard: React.FC = () => {
  const userInfo: userInfoProps = {
    username: 'Carina Geng',
    level: 'Level 3'
  }
  const userOthers: userOthersProps = {
    xp: [
      { title: 'Today’s XP', value: '50' },
      { title: 'Total XP', value: '750/800' }
    ]
  }
  return (<div className={'w-full h-full'}>
    <div style={{ margin: '37px 70px 0 70px' }}>
      <UserInfo { ...userInfo } />
      <UserOthers { ...userOthers } />
    </div>
  </div>)
}

UserCard.displayName = 'UserCard'
export default UserCard
