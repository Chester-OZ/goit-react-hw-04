import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images }) {
  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`}>
          <ImageCard {...image} />
        </li>
      ))}
    </ul>
  )
}
