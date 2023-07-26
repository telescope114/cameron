import React from 'react'
import Card from '@/components/atoms/Card'
import UserCard from '@/components/organisms/UserCard'

const Home: React.FC = () => {
  return (
    <main className={`h-screen bg-main flex justify-center items-center`}>
      <div className="flex">
        <Card width={345} height={561}>
          <UserCard />
        </Card>
        <div className={'inline-block ml-3'} style={{ width: 1083 }}>
          <Card height={221} width={1083}>123</Card>
          <Card height={328} width={1083} className={'mt-3'}>321</Card>
        </div>
      </div>
    </main>
  )
}

Home.displayName = 'Home'
export default Home
