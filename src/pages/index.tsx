import React from 'react'
import Card from '@/components/atoms/Card'
import UserCard from '@/components/organisms/UserCard'
import DailyQuests from '@/components/organisms/DailyQuests'
import Milestones from "@/components/organisms/Milestones";

const Home: React.FC = () => {
  return (
    <main className={`h-screen bg-main flex justify-center items-center`}>
      <div className="flex">
        <Card width={345} height={561}>
          <UserCard />
        </Card>
        <div className={'inline-block ml-3'} style={{ width: 1083 }}>
          <Card height={221} width={1083}>
            <DailyQuests />
          </Card>
          <Card height={328} width={1083} className={'mt-3'}>
            <Milestones />
          </Card>
        </div>
      </div>
    </main>
  )
}

Home.displayName = 'Home'
export default Home
