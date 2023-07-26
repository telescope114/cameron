import React from 'react'

type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

interface CircularProgressBarProps {
  radius?: number // 圆环半径
  strokeWidth?: number // 圆环的宽度
  percentage?: number // 显示的百分比 (0 - 100)
  strokeColor?: string // 圆环的颜色
  backgroundColor?: string // 圆环的背景颜色
  margin?: number // 外部容器和圆环之间的间距，单位为px
  children?: React.ReactNode // Children elements to render inside the circular area
}

const RangeSlider: React.FC<CircularProgressBarProps> = ({
     radius = 50,
     strokeWidth = 1,
     percentage = 100,
     strokeColor = 'black',
     backgroundColor = 'transparent',
     margin = 1,
     children,
   }) => {
  const percentageCheck = percentage > 100 ? 100 : percentage
  const normalizedRadius = radius - strokeWidth / 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = ((125 - percentageCheck) / 100) * circumference
  
  const containerSize = radius * 2 + margin * 2
  const containerStyle = {
    width: containerSize,
    height: containerSize,
    position: 'relative' as Position,
  }
  
  const sliderStyle = {
    position: 'absolute' as Position,
    top: margin,
    left: margin,
  }
  
  return (
    <div style={containerStyle}>
      <svg height={radius * 2} width={radius * 2} style={sliderStyle}>
        <circle
          stroke={backgroundColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          transform={`rotate(-90 ${radius} ${radius})`}
          cx={radius}
          cy={radius}
        />
      </svg>
      
      {children && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          { children }
        </div>
      ) }
    </div>
  )
}

export default RangeSlider