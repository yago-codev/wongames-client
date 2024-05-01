import { Meta, StoryFn, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Default: StoryObj = {}

export const Desktop: StoryFn = () => (
  <MediaMatch greaterThan="medium">Only Desktop</MediaMatch>
)
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

export const Mobile: StoryFn = () => (
  <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
