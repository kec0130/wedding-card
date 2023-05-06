import { MouseEvent } from 'react'
import cx from 'classnames'

import { BASE_URL } from 'constants/images'
import styles from './imageGrid.module.scss'

export interface IImageGridProps {
  imageList: string[]
  className?: string
  keyPrefix: string
  directory: string
  inModal?: boolean
  handleImageClick?: (e: MouseEvent) => void
}

const ImageGrid = ({
  imageList,
  className,
  keyPrefix,
  directory,
  inModal = false,
  handleImageClick,
}: IImageGridProps) => {
  return (
    <ul className={cx(styles.imageList, styles[className || ''])}>
      {imageList.map((image) => (
        <li key={`${keyPrefix}-${image}`}>
          {inModal ? (
            <button type='button' onClick={handleImageClick}>
              <img src={`/images/${image}.jpeg`} alt={image} />
            </button>
          ) : (
            <img src={`${BASE_URL}/${directory}/${image}.jpeg`} alt={image} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default ImageGrid
