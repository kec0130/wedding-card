import styles from './home.module.scss'

const Introduction = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textWrapper}>
        <h1>정민채 & 고은채</h1>
        <p>
          2023. 6. 10 (토) 오후 4시
          <br />
          아펠가모 공덕 7층 마리에홀
        </p>
      </div>
    </div>
  )
}

export default Introduction
