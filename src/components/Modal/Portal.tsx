import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const ModalPortal = ({ children }: PortalProps) => {
  const el = document.getElementById('modal-root') as HTMLElement
  return createPortal(children, el)
}

export default ModalPortal
