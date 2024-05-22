import gcode from './getcode.json'
import FrcstNav from "./FrcstNav"
import TailSelect from "../11/TailSelect"
import { useSearchParams } from "react-router-dom"
import { useState,useEffect, useRef } from 'react'

export default function FrcstList() {
    const [tdata, setTdata] = useState();  //예보정보
    const [Ops, setOps] = useState([])
    const [sParams] = useSearchParams();
    const gubun = sParams.get('gubun');
    const x = sParams.get('x');
    const y = sParams.get('y');
    const dt = sParams.get('dt');
    const area = sParams.get('area');
    const selRef = useRef();
    console.log(gubun, x, y, dt, area);

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.response.body.items.item))
            .catch(err => console.log(err))

    }
    
    useEffect(() => {
        //항목 select
        let tm = gcode.filter(item => gubun === '단기' ? 
                                        item['예보구분'] === '단기예보' :
                                        item['예보구분'] === '초단기예보')
                                .map( item => item['항목명'])
        console.log(tm);
        setOps(tm);
        
        let url;
        if (tm === '초단기'){
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=900&dataType=JSON&`
        url = url + `base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
        }

        else{
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=900&dataType=JSON&`
        url = url + `base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
        }
        
        getFetchData(url);
    }, [])


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
                        initText="----지역선택----"
                        handleChange={item => item['항목명']}/>
      </div>

      
    </div>
  )
}
