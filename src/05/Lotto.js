import Ball from "./Ball";
import ButtonC from "./ButtonC";
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState();
  const handleOk = () => {
    let arr = [];
    while(arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
    if (!arr.includes(n)) arr.push(n);
    }
    let tm = arr.map(item => <Ball n={item} key={item}/>);
    tm.splice(6,0,<span className="text-3x1 mx-2 " key="sp">+</span>);
    setTags(tm);
    console.log('OK');
  }
  return (
    <div className="w-full flex flex-col
    justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <ButtonC caption={'로또번호 생성'}  bcolor={'blue'}  handleClick={handleOk}/>
      </div>
    </div>
  )
}
