import BoxOfficeBody from "./BoxOfficeBody";
import BoxOfficeHeader from "./BoxOfficeHeader";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useEffect, useRef, useState } from "react";

export default function BoxOffice() {
  const [selMv, setSelMv] = useState();
  const [dailyList, setDailyList] = useState([]);
  const seldate = useRef();

  //데이터 가져오기
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .then(err => console.log(err))
  }

  // 날짜가 선택되었을때
  const handleSelect = (e) => {
    e.preventDefault();
    console.log(seldate.current.value); //ref변수 있을시
    // console.log(e.target.value);  //ref변수 없을시

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url + `key=${process.env.REACT_APP_MV_KEY}`
    url = url + `&targetDt=${seldate.current.value.replaceAll('-', '')}`
    getFetchData(url);

  }
  // useEffect(() => {
  //   setDailyList(data.boxOfficeResult.dailyBoxOfficeList);
  // }, []);

  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList])

  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full flex flex-col justify-start items-center mt-10">
          <form className="w-full">
            <div className="w-11/12 my-2 flex justify-end items-center">
              <label htmlFor="dateId" className="mr-10 font-bold">날짜선택</label>
              <input type="date" id="dateId" ref={seldate} onChange={handleSelect}
              className="bg-gray-50 border border-gray-300 text-gray-900"></input>
            </div>
          </form>
          <table
            className="w-11/12 text-left text-sm font-light text-surface">
            <BoxOfficeHeader />
            <BoxOfficeBody dailyList={dailyList} setSelMv={setSelMv} />
          </table>
          {selMv && <BoxOfficeInfo selMv={selMv} />}
        </div>
      </div>
    </div>
  )
}
