import MyDiv21 from "./MyDiv21";
// 1. useState import
import { useState } from "react";

export default function MyDiv1() {
    //2. state 변수선언
    const [n, setN] = useState(0);
  const dn1 = "vdiv1";
  const dn2 = "vdiv2";
  const dn3 = "vdiv3";

  const HandleCount = () => {
    // 3. 함수로 선언 수치조정
    setN(n + 1);
    console.log("HandleCount", n)
}

  return (
    <div className='flex flex-col w-2/3 h-2/3 text-white bg-slate-500 items-center justify-center rounded-sm p-10'>
        <div className="w-full bg-slate-500 justify-end items-center flex">
            <span className="inline-flex mx-10" onClick={HandleCount}>
                💖
            </span>
            <span>
                {n}
            </span>
        </div>
      {dn1}
      <MyDiv21 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}