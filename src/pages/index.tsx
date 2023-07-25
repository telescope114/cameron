import React from 'react'
import LineProgress from "@/components/atoms/progress/LineProgress";

const Home: React.FC = () => {
  return (
    <main className={`h-screen bg-main w-full`}>
        <LineProgress value={0.8} />
    </main>
  )
}

Home.displayName = 'Home'
export default Home
