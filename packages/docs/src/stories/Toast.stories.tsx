import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@andre-santos-ignite-ui/react'
import { useEffect, useState } from 'react'

const ToastDemo = (args: any) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), args.duration || 4000)
    return () => clearTimeout(timer)
  }, [args.duration])

  return visible ? <Toast {...args} /> : null
}

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    message: 'Agendamento realizado',
    subMessage: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 4000,
  },
} as Meta

export const Default: StoryObj = {
  render: (args) => <ToastDemo {...args} />,
}