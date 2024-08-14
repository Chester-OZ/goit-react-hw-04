export default function LoadMoreBtn({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
