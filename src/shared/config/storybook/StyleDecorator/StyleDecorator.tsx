import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import React from 'react'

export const StyleDecorator = (story: () => Story) => {
  return (
      <div className='app light'>{story()}</div>
  )
}
