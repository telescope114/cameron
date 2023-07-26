import React from "react";
import RangeSlider from "@/components/atoms/progress/RangeSlider";
import CircleBox from "@/components/atoms/CircleBox";
import Image from "next/image";
import iconSVG from "@/images/icon.svg";

export type props = {
  width: string | number,
  height: string | number,
  children?: React.ReactNode,
  percentage: number,
  iconVal: string | number
}
const DailyQuestsRightItem: React.FC<props> = ({ width, height, children, percentage, iconVal }) => {
  return (
    <div style={{ width, height }}>
      <RangeSlider radius={135 / 2} strokeWidth={2} percentage={percentage} strokeColor={"#ffffff"} backgroundColor={'#5C5C5C'} >
        <CircleBox radius={123} >
          { children }
        </CircleBox>
      </RangeSlider>
      <div className={'flex justify-center mt-5'}>
        <Image src={iconSVG} alt={''} width={20} height={20} />
        <div className={'text-white ml-1'}>{ iconVal }</div>
      </div>
    </div>
  )
}

DailyQuestsRightItem.displayName = 'DailyQuestsRightItem'
export default DailyQuestsRightItem
