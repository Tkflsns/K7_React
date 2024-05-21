import { useState, useEffect } from "react";

export default function MyListItem({title, imgUrl, content}) {
    const [cnt, setcnt] = useState(0); //0은 초기값

    const handleClick = () => {
      setcnt(cnt + 1);
      console.log(title, 'cnt = ', cnt);
    }
    // useEffect(() => {}); //이렇게도 사용가능
    useEffect(() => {
      console.log(title, '생성');
    }, []); //컴포넌트 생성시 한번만 실행

    //state변수가 변경되었을때
    useEffect(() => {
      console.log(title, '변경 cnt = ', cnt)
    }, [cnt]);

    // 컴포넌트 변경되면 항상 실행
    useEffect(() => {
      console.log(title, '변경됨');
    });
    
  return (
    <div className="flex w-full justify-center items-start bg-slate-200">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col w-2/3 m-2 p-2 h-full justify-between">
        <div className="font-bold">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
        <div className="flex justify-end">
            <span onClick={handleClick}>💖</span>
            <span>좋아요</span>
            <span>{cnt}</span>
        </div>
      </div>
    </div>

    
  )
}
