import { ReactNode } from 'react'

import ImageGrid, { IImageGridProps } from 'components/ImageGrid'
import { IDescription } from './constants/text'

interface IProps extends IDescription, IImageGridProps {
  children?: ReactNode
}

const Description = ({ title, description, imageList, className, keyPrefix, directory, children }: IProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
      <ImageGrid imageList={imageList} className={className} keyPrefix={keyPrefix} directory={directory} />
    </section>
  )
}

export default Description
