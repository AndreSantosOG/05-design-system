import { Box, Text , Tooltip } from '@andre-santos-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    content: '26 de Outubro - Disponível',
    children: <Text>26</Text>,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Default: StoryObj = {}