import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  )
}
