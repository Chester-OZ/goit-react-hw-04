import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick, children }) {
  return (
    <div>
      <button className={css.more} onClick={onClick}>{children}</button>
    </div>
  )
}
