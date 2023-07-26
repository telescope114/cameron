import { props as tabsProps } from '../atoms/Tabs'
import { props as listProps } from '../atoms/List'

export const tabsConfig: tabsProps['config'] = [
  { title: 'Course Completion', value: '1' },
  { title: 'Quest Winning Streak', value: '2' },
  { title: 'Track Completion', value: '3' }
]

export const listConfig: listProps['config'] = {
  courseCompletion: [
    { label: 'Complete 3 Syntax', iconVal: '25', progressVal: (1 / 3), progressLabel: '1/3', buttonText: 'Claim', buttonType: 'primary', disabled: false },
    { label: 'Complete 6 Syntax', iconVal: '50', progressVal: (1 / 6), progressLabel: '1/6', buttonText: 'Start Learning', buttonType: 'default', disabled: false },
    { label: 'Complete 10 Syntax', iconVal: '120', progressVal: (1 / 10), progressLabel: '1/10', buttonText: 'Start Learning', buttonType: 'default', disabled: false }
  ],
  questWinningStreak: [
    { label: 'Quest Winning Streak 1', iconVal: '25', progressVal: (1 / 3), progressLabel: '1/3', buttonText: 'Claim', buttonType: 'primary', disabled: false },
    { label: 'Quest Winning Streak 2', iconVal: '50', progressVal: (1 / 6), progressLabel: '1/6', buttonText: 'Start Learning', buttonType: 'default', disabled: false },
    { label: 'Quest Winning Streak 3', iconVal: '120', progressVal: (1 / 10), progressLabel: '1/10', buttonText: 'Start Learning', buttonType: 'default', disabled: false }
  ],
  trackCompletion: [
    { label: 'Track Completion 1', iconVal: '25', progressVal: (1 / 3), progressLabel: '1/3', buttonText: 'Claim', buttonType: 'primary', disabled: false },
    { label: 'Track Completion 2', iconVal: '50', progressVal: (1 / 6), progressLabel: '1/6', buttonText: 'Start Learning', buttonType: 'default', disabled: false },
    { label: 'Track Completion 3', iconVal: '120', progressVal: (1 / 10), progressLabel: '1/10', buttonText: 'Start Learning', buttonType: 'default', disabled: false }
  ]
}
