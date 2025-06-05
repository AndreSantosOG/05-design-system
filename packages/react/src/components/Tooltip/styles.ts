import { styled } from '../../styles'

export const TooltipWrapper = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const TooltipContainer = styled('div', {
  position: 'absolute',
  bottom: 'calc(100% + 8px)',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#000',
  color: '#FFF',
  padding: '8px 12px',
  borderRadius: '6px',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  zIndex: 10,

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: '#000 transparent transparent transparent',
  },
})
