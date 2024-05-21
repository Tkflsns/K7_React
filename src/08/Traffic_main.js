import { useState, useEffect } from "react";
import ButtonC from '../05/ButtonC';

export default function Traffic_main() {
  const [tdata, setTdata] = useState([]);// 전체 fetch데이터
  const [c1, setC1] = useState();       // 대분류
  const [c1Tag, setC1tag] = useState(); // 대분류 버튼
  const [c1Sel, setC1sel] = useState(); // 선택된 대분류

  const [c2, setC2] = useState();       // 중분류
  const [c2Tag, setC2tag] = useState(); // 중분류 버튼
  const [c2Sel, setC2sel] = useState(); // 선택된 중분류

  const [info, setInfo] = useState();   // 선택된 상세정보


  //대분류를 선택할때 실행
  const handleC1click = (item) => {
    setC1sel(item);
  }
  // 중분류를 선택할떄 실행
  const handleC2click = (item) => {
    setC2sel(item);
  }

  //fetch 함수로 데이터 가져오기
  const getData = (url) => {
    fetch(url)  //.then 순서대로 실행
      .then(resp => resp.json()) //json파일 생성
      .then(data => setTdata(data.data))
      .catch(err => console.log(err));
  }


  //컴포넌트 생성시 한번 실행
  useEffect(() => {
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?';
    url = `${url}perPage=17&serviceKey=${process.env.REACT_APP_API_KEY}`;
    // url = url + `perPage=17&serviceKey=${process.env.REACT_APP_API_KEY}`;
    // 서비스키 env에 넣고 깃이그노어에 제외항목 추가
    console.log(url)
    getData(url);
  }, []);
  // [] 없으면 변수 상관없이 (state변수가 변경)화면변경만 있으면 무조건 실행
  // [] 있으면 맨처음 한번만 실행
  // [변수] 특정 변수가 변화될때마다 실행
  // useeffect는 호출하지않아도 실행

  //tdata가 변경이 되면 실행
  useEffect(() => {
    if (tdata.length === 0) return;

    console.log("tdata=", tdata)
    let tm = tdata.map(item => item['사고유형대분류'])
    tm = [...new Set(tm)]
    setC1(tm)
  }, [tdata]);

  //대분류 생성후
  useEffect(() => {
    if (!c1) return;
    console.log("c1=", c1)
    let tm1 = c1.map(item =>
      <ButtonC caption={item}
        key={item}
        bcolor={'blue'}
        handleClick={() => handleC1click(item)}
      />
    )
    setC1tag(tm1);
  }, [c1]);

  //대분류 선택 => 중분류
  useEffect(() => {
    console.log("대분류선택 : ", c1Sel)
    let tm = tdata.filter(item => item['사고유형대분류'] === c1Sel)
                          .map(item => item['사고유형중분류']);
    console.log("중분류 =>", tm);
    setC2(tm);
  }, [c1Sel]);

  //중분류가 만들어졌을때
  useEffect(() => {
    console.log("c2", c2);
    if (!c2) return;
    let tm2 = c2.map(item =>
      <ButtonC caption={item}
        key={item}
        bcolor={'blue'}
        handleClick={() => handleC2click(item)}
      />
    )
    setC2tag(tm2);
  }, [c2])

  //중분류 선택 => 상세정보
  useEffect(() => {
    console.log("대분류선택 : ", c1Sel)
    console.log("중분류선택 : ", c2Sel)

    let tm = tdata.filter(item => item['사고유형대분류'] === c1Sel &&
                                  item['사고유형중분류'] === c2Sel)

    tm = tm[0];
    console.log('상세', tm);
    setInfo(tm['사고건수']);

  }, [c2Sel]);


  return (
    <div>
      <div className="flex justify-between ">
        <div>
          교통사고 대분류
        </div>
        <div>
          {c1Tag}
        </div>
      </div>
      <div className="flex justify-between ">
        <div>
          교통사고 중분류
        </div>
        <div>
          {c2Tag}
        </div>
      </div>
      <div>
         사고건수 : {parseInt(info).toLocaleString()}
      </div>
    </div>
  )
}
