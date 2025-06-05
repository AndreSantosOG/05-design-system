import { styled, keyframes } from '../../styles'

const fadeInUp = keyframes({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const ToastContainer = styled('div', {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#121214',
  color: 'white',
  padding: '16px 24px',
  borderRadius: '6px',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  zIndex: 999,
  animation: `${fadeInUp} 300ms ease-out`,
})

export const ToastMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '16px',
    fontWeight: 'bold',
  },

  span: {
    fontSize: '14px',
    color: '#a8a8b3',
  },
})

export const ToastCloseButton = styled('button', {
  background: 'transparent',
  border: 0,
  color: '#a8a8b3',
  fontSize: '18px',
  cursor: 'pointer',
})
