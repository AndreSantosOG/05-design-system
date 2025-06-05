import { useEffect, useState } from 'react'
import {
  ToastContainer,
  ToastMessage,
  ToastCloseButton,
} from './styles'

interface ToastProps {
  message: string
  subMessage?: string
  duration?: number
}

export function Toast({ message, subMessage, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <ToastContainer>
      <ToastMessage>
        <strong>{message}</strong>
        {subMessage && <span>{subMessage}</span>}
      </ToastMessage>
      <ToastCloseButton onClick={() => setVisible(false)}>×</ToastCloseButton>
    </ToastContainer>
  )
}
