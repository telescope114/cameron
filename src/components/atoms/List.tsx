import React, { useMemo } from 'react'
import iconSVG from '@/images/icon.svg'
import Image from 'next/image'
import LineProgress from "@/components/atoms/progress/LineProgress";
import Button from "@/components/atoms/Button";

type listItem = {
  label: string,
  iconVal: number | string,
  progressVal: number,
  progressLabel: string,
  buttonType?: 'default' | 'primary',
  buttonText: string,
  disabled?: boolean
}

export type props = {
  className?: string,
  config: Record<string, listItem[]>
}
const List: React.FC<props> = ({ className, config }) => {
  const listItem = useMemo(() => {
    const getItem = (items: listItem[], i: number) => {
      return items.map((item, index) => {
        return (<div key={ index } className={'h-13 flex justify-between bg-list-item rounded-2xl ' + ((index + i) > 0 ? 'mt-3' : '')}>
          <div className="h-full flex">
            <svg width="162" height="53" viewBox="0 0 162 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323"/>
            </svg>
            <div className={'ml-4 leading-13 w-37.5 font-button-font text-white'}>{ item.label }</div>
            <div className={'ml-12 mt-4 mb-4'}><Image src={ iconSVG } width={20} height={20} alt="" ></Image></div>
            <div className={'ml-1 leading-13 font-button-font text-default w-7 font-bold'} >{ item.iconVal }</div>
            <LineProgress value={ item.progressVal } className={'ml-14 my-5'} />
            <div className={'ml-3 leading-13 font-button-font text-white'}>{ item.progressLabel }</div>
          </div>
          <Button disabled={item.disabled} className={'h-10 my-1.5'} type={item.buttonType}>{ item.buttonText }</Button>
        </div>)
      })
    }
    return Object.entries(config).map(([key, value], index) => {
      return (<div key={ key }>{ getItem(value, index) }</div>)
    })
  }, [config])
  return (<div className={'font-button-font w-full overflow-auto ' + (className || '')}>
    { listItem }
  </div>)
}

List.displayName = 'List'
export default List
