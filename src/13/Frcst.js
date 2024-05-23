import gxy from './getxy.json'
import FrcstNav from './FrcstNav'
import TailSelect from '../11/TailSelect'
import ButtonC from '../05/ButtonC'
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'


export default function Frcst() {
    const navigate = useNavigate();
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] = useState();
    const [selGuOp, setselGuOp] = useState([]);
    const selRefGu = useRef();
    const seldate = useRef();

    // console.log(selGu)

    
    const handleGuselect = () => {
        let tm = gxy.filter(item => item["1단계"] === selRefGu.current.value)  ;
        tm = tm[0] ;
        console.log(tm)  
        setX(tm["격자 X"]) ;
        setY(tm["격자 Y"])
        setArea(selRefGu.current.value) ;
      }

    useEffect(() => {
        let tm = gxy.map(item => item["1단계"]) ;
        // console.log(tm)
        setselGuOp(tm);
      } , []) ;


    const handleUrl = (gubun) => {
        if (!x || !y || !seldate.current.value) {
            alert('날짜와 지역을 선택하세요.');
            return;
        }

        navigate(`/frcstlt?gubun=${gubun}&x=${x}&y=${y}&dt=${seldate.current.value.replaceAll('-', '')}&area=${area}`)
    }

    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    console.log(minDate)
    return (
        <div>
            <FrcstNav />
            <div className='w-3/4 justify-center flex'>
                <div className='w-10/12 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
                    <input type="date" id="dateId" ref={seldate}
                        className="bg-gray-50 border border-gray-300 text-gray-900 w-full h-full"></input>
                    <TailSelect id="sel"
                        ops={selGuOp}
                        selRef={selRefGu}
                        initText="----지역선택----"
                        handleChange={handleGuselect}
                    />
                </div>
            </div>
            <div>
                <ButtonC caption="초단기예보"
                    bcolor="blue"
                    handleClick={() => handleUrl('초단기')} />
                <ButtonC caption="단기예보"
                    bcolor="blue"
                    handleClick={() => handleUrl('단기')} />
            </div>
        </div>
    )
}
