import { ReactNode, useRef } from 'react'

import { useClickOutside } from 'hooks/useClickOutside'

import ModalPortal from './Portal'
import styles from './modal.module.scss'

interface ModalProps {
  closeModal: () => void
  title?: string
  children: ReactNode
}

const Modal = ({ closeModal, title, children }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, closeModal)

  return (
    <ModalPortal>
      <div className={styles.background}>
        <div className={styles.modalContent} ref={ref}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <section>{children}</section>
        </div>
      </div>
    </ModalPortal>
  )
}

export default Modal
