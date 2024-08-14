import css from './ImageCard.module.css'
export default function ImageCard({ urls: { small }, description }) {
  return (
    <div className={css.card}>
      <img src={small} alt={description} />
    </div>
  )
}
