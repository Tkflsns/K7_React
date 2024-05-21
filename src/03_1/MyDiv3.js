
export default function MyDiv3(props) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5 text-white bg-lime-500 rounded-sm m-10 p-10">
      {`${props.dn1} > ${props.dn2} > ${props.dn3}`}
    </div>
  )
}
