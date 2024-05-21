import ButtonC from "../05/ButtonC"
import { useEffect, useState, useRef } from "react";

export default function MyRef() {
    let cVal = 0;
    const [sVal, setSVal] = useState(0);
    const rVal = useRef(0);

    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleClickComp = () => {
        cVal++;
        console.log("cVal = ", cVal)
    }

    const handleClickState = () => {
        setSVal(sVal + 1);
    }

    const handleClickRef = () => {
        rVal.current = rVal.current + 1;
        console.log("rVal = ", rVal.current)
    }

    const handleClick = () => {
        if (!x1.current.value){
            alert('값을 입력하세요.')
            x1.current.focus();
            return;
        }
        if (!x2.current.value){
            alert('값을 입력하세요.')
            x2.current.focus();
            return;
        }

        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
    }

    //변수 변경시
    useEffect(() => {
        console.log("sVal = ", sVal)
    }, [sVal])

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="h-20 p-5 m-5 font-bold text-xl">
        <span>컴포넌트 변수 : {cVal}</span>
        <span>state 변수 : {sVal}</span>
        <span>ref 변수 : {rVal.current}</span>
      </div>
      <div>
        <span><ButtonC caption= "컴포넌트 변수"
                        bcolor="blue"
                        handleClick={handleClickComp}/>
        </span>
        <span><ButtonC caption= "state 변수"
                        bcolor="blue"
                        handleClick={handleClickState}/>
        </span>
        <span><ButtonC caption= "ref 변수"
                        bcolor="blue"
                        handleClick={handleClickRef}/>
        </span>
      </div>
      <div className="flex">
        <input type="number" id = "txt1"
        ref={x1}
        className="bg to-gray-50 border border-gray-300 text-gray-900
                    text-center text-xl
                    focus:ring-blue-500 focus:border-blue-500 block" />
        <span className="bg to-gray-50 border border-gray-300 text-gray-900
                    text-center text-xl
                    focus:ring-blue-500 focus:border-blue-500 block">+</span>
        <input type="number" id = "txt2" ref={x2}className="bg to-gray-50 border border-gray-300 text-gray-900
                    text-center text-xl
                    focus:ring-blue-500 focus:border-blue-500 block"/>
        <ButtonC
            caption= " = "
            bcolor= "orange"
            handleClick={handleClick} />
        <input type="number" id = "txt3" ref={x3}
        className="bg to-gray-50 border border-gray-300 text-gray-900
        text-center text-xl
        focus:ring-blue-500 focus:border-blue-500 block" readOnly/>
      </div>
    </div>
  )
}
