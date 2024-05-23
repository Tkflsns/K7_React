import gcode from './getcode.json'
import FrcstNav from "./FrcstNav"
import TailSelect from "../11/TailSelect"
import { useSearchParams } from "react-router-dom"
import { useState,useEffect, useRef } from 'react'

export default function FrcstList() {
    const [tdata, setTdata] = useState();  //예보정보
    const [Ops, setOps] = useState([])
    const [selOps, setSelOps] = useState();
    const [tags, setTags] = useState();
    const [sParams] = useSearchParams();
    const gubun = sParams.get('gubun');
    const x = sParams.get('x');
    const y = sParams.get('y');
    const dt = sParams.get('dt');
    const area = sParams.get('area');
    const selRef = useRef();

    const sky = {'1' : '🌞맑음', '3' : '⛅구름많음', '4' : '☁흐림'}
    const pty = {'0' : '없음', '1' : '비', '2' : '눈/비', '3' : '눈', '4' : '소나기',
                  '5' : '빗방울', '6' : '빗방울눈날림', '7' : '눈날림'}
    
    console.log(gubun, x, y, dt, area);

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {console.log("fetch",data)
            setTdata(data.response.body.items.item)})
            .catch(err => console.log(err))

    }


    
    useEffect(() => {
        //항목 select
        let tm = gcode.filter(item => gubun === '단기' ? 
                                        item['예보구분'] === '단기예보' :
                                        item['예보구분'] === '초단기예보')
                                .map( item => item['항목명'])
        console.log("tm",tm);
        setOps(tm);
        
        let url;
        if (gubun === '초단기'){
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=900`;
        url = url + `&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
        }

        else{
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=900`;
        url = url + `&dataType=JSON&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
        }
        console.log("url",url);
        
        getFetchData(url);
    }, []);

    useEffect(() => {
      if (!selOps) return;
      console.log("selOps", selOps)
      let tm = tdata.filter(item => selOps['항목값'] === item['category'])
                              .map(item =>
                                <tr key={`${item['fcstDate']}${item['fcstTime']}`}
                                className="border-b border-neutral-200 hover:bg-neutral-100 text-center">
                                <td scope='col' className='px-6 py-3'>
                                {selOps["항목명"]}({item["category"]})
                                  </td>
                                <td scope='col' className='px-6 py-3'>
                                {`${item["fcstDate"].substring(0, 4)}-${item["fcstDate"].substring(4, 6)}-${item["fcstDate"].substring(6, 8)}`}
                                  </td>
                                <td scope='col' className='px-6 py-3'>
                                {`${item["fcstTime"].substring(0, 2)}:${item["fcstTime"].substring(2, 4)}`}
                                  </td>
                                <td scope='col' className='px-6 py-3'>
                                {item["category"] === 'SKY'
                                ? sky[item['fcstValue']]
                                : item['category'] === 'PTY'
                                ? pty[item['fcstValue']]
                                : `${item["fcstValue"]} ${selOps["단위"]}`}
                                  </td>
                                </tr>
                              );
      setTags(tm);
    },[selOps])

    const handleSelect = () => {
      console.log("ops선택 : ", selRef.current.value)
      let tm = gcode.filter(item => selRef.current.value ===  item['항목명'] &&
                             (gubun === '단기' ? 
                             item['예보구분'] === '단기예보' :
                             item['예보구분'] === '초단기예보'));
      console.log("tm", tm)
      setSelOps(tm[0])
    }

  return (
    <div>
      <FrcstNav />
      <div className='flex w-full'>
        <h1 className='flex w-1/4'>{gubun}예보 : ( <div className='text-blue-700'>{area}</div>)</h1>
      </div>
      <div className='w-1/3'>
      <TailSelect id="sel"
                        ops={Ops}
                        selRef={selRef}
                        initText="----항목 선택----"
                        handleChange={handleSelect}/>
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">항목명</th>
            <th scope="col" className="px-6 py-3">예측일자</th>
            <th scope="col" className="px-6 py-3">예측시간</th>
            <th scope="col" className="px-6 py-3">항목값</th>
          </tr>
          {tags}
        </thead>
      </table>
      
    </div>
  )
}
