import { LoadingIcon } from 'assets/svgs'
import styles from './loading.module.scss'

interface IProps {
  message: string
}

const Loading = ({ message }: IProps) => {
  return (
    <div className={styles.loading}>
      <LoadingIcon />
      <span>{message}</span>
    </div>
  )
}

export default Loading
