import { RotatingLines } from 'react-loader-spinner'

export default function Loader() {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="48"
        width="48"
        color="gray"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
