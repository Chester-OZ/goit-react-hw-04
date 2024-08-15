import css from './ImageCard.module.css'
export default function ImageCard({
  urls: { small, regular },
  description,
  openModal,
}) {
  return (
    <div className={css.card}>
      <img
        src={small}
        alt={description}
        onClick={() => openModal(regular, description)}
      />
    </div>
  )
}
