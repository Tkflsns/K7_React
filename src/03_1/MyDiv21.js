import MyDiv3 from "./MyDiv3"

export default function MyDiv21(props) {
  return (
    <div className="flex flex-col p-10 w-4/5 h-4/5 justify-center items-center text-white bg-lime-700 rounded-sm m-10">
      {`${props.dn1} > ${props.dn2}`}
      <MyDiv3 dn1={props.dn1} dn2={props.dn2} dn3={props.dn3}/>
    </div>
  )
}