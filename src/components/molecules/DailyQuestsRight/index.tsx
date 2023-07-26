import React from 'react'

import DailyQuestsRightItem from "@/components/molecules/DailyQuestsRight/Item";
import Button from "@/components/atoms/Button";

const DailyQuestsRight: React.FC = () => {
  const arr = [true, false]
  const getLineColor = (type: boolean): string => type ? 'border-white' : 'border-5C5C5C'
  return (<div className={'h-full w-full mt-6.5 flex relative'}>
    <DailyQuestsRightItem width={135} height={175} percentage={1} iconVal={5}>
      <div className={'bg-transparent w-full h-full border-0.5px rounded-full border-5C5C5C flex justify-center items-center'}>
        <Button className={'h-10 w-20 px-0'} ghost={true}>Claimed</Button>
      </div>
    </DailyQuestsRightItem>
    <div className={'w-105px h-0 border-t-1px mt-17 ' + getLineColor(arr[0]) } />
    <DailyQuestsRightItem width={135} height={175} percentage={6/10} iconVal={10}>
      <div className={'bg-white w-full h-full pt-9'}>
        <div className={'text-primary text-center font-button-font leading-14px'}>Complete</div>
        <div className={'text-primary text-center font-button-font leading-14px'}>10 Quest</div>
        <div className={'text-primary text-center font-button-font text-sm leading-14px mt-4'}>6/10</div>
      </div>
    </DailyQuestsRightItem>
    <div className={'w-105px h-0 border-t-1px mt-17 ' + getLineColor(arr[1]) } />
    <DailyQuestsRightItem width={135} height={175} percentage={6/20} iconVal={20}>
      <div className={'bg-transparent w-full h-full pt-9 border-0.5px rounded-full border-5C5C5C'}>
        <div className={'text-default text-center font-button-font leading-14px'}>Complete</div>
        <div className={'text-default text-center font-button-font leading-14px'}>20 Quest</div>
        <div className={'text-default text-center font-button-font text-sm leading-14px mt-4'}>6/20</div>
      </div>
    </DailyQuestsRightItem>
    <div className={'w-36 ml-13.5 mt-47px'}>
      <Button widthFull={true} disabled={true}>Claim</Button>
      <Button className={'mt-3'} widthFull={true}>Start Learning</Button>
    </div>
  </div>)
}

DailyQuestsRight.displayName = 'Index'
export default DailyQuestsRight
