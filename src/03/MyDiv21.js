import MyDiv3 from "./MyDiv3"

export default function MyDiv21({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-10 w-4/5 h-4/5 justify-center items-center text-white bg-lime-700 rounded-sm m-10">
      {`${dn1} > ${dn2}`}
      <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}