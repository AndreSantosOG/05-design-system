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
  backgroundColor: '$black',
  color: '$white',
  fontFamily: '$default',
  padding: '$2 $3',
  borderRadius: '$sm',
  fontSize: '$sm',
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
