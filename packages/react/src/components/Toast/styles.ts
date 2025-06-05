import { keyframes, styled } from '../../styles'

const fadeInUp = keyframes({
  from: { opacity: 0, transform: 'translateY(20px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
})

export const ToastContainer = styled('div', {
  position: 'fixed',
  bottom: '$5',
  right: '$5',
  backgroundColor: '$gray900',
  color: '$white',
  padding: '$4 $6',
  borderRadius: '$sm',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  zIndex: 999,
  animation: `${fadeInUp} 300ms ease-out`,
})

export const ToastMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$default',

  strong: {
    fontFamily: '$default',
    fontSize: '$md',
    fontWeight: 'bold',
  },

  span: {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',
  },
})

export const ToastCloseButton = styled('button', {
  background: 'transparent',
  border: 0,
  color: '$gray200',
  fontSize: '$lg',
  cursor: 'pointer',
})
