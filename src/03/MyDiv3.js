
export default function MyDiv3({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5 text-white bg-lime-500 rounded-sm m-10 p-10">
      {`${dn1} > ${dn2} > ${dn3}`}
    </div>
  )
}
