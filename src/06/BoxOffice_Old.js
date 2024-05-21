import Box from "./Box.json";
import BoxOfficeBody from "./BoxOfficeBody";
import BoxOfficeHeader from "./BoxOfficeHeader";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useEffect, useState } from "react";

export default function BoxOffice() {
  const [selMv, setSelMv] = useState();
  const [dailyList, setDailyList] = useState([]);

  useEffect(() => {
    setDailyList(Box.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  useEffect (() => {
    setSelMv(dailyList[0]);
  },[dailyList])

  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full flex flex-col justify-start items-center mt-5">
          <table
            className="w-11/12 text-left text-sm font-light text-surface">
            <BoxOfficeHeader />
            <BoxOfficeBody dailyList={dailyList} setSelMv={setSelMv}/>
          </table>
          {selMv  && <BoxOfficeInfo selMv={selMv}/> }
        </div>
      </div>
    </div>
  )
}
