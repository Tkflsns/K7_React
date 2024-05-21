import MyDiv21 from "./MyDiv21";

export default function MyDiv1() {
  const dn1 = "vdiv1";
  const dn2 = "vdiv2";
  const dn3 = "vdiv3";

  return (
    <div className='flex flex-col w-2/3 h-2/3 text-white bg-slate-500 items-center justify-center rounded-sm p-10'>
      {dn1}
      <MyDiv21 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}

