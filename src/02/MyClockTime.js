import './MyClock.css';
import style from './My.module.css'
import { useEffect, useState } from 'react';

function MyClockTime(){
    const [ctime, setCtime] = useState(new Date()) ;

    useEffect(() => {
        const tm = setInterval(() => {
            setCtime(new Date());
        }, 1000);

        return () => {
            clearInterval(tm)
        }
    }, []);
    // const st = {color : "yellow", fontWeight : "bold"};

    // let divStyle = "div1";
    // if(gubun == '오전') divStyle = "div1";
    // else divStyle = "div2";

    return(
        <>
        {/* {
            (gubun === '오전') ? <div className="div1">{nowStr}</div>
                                :<div className="div2">{nowStr}</div>
        } */}

        {/* <div className={gubun === '오전' ? "div1" : "div2"}> */}
        {/* <div style={{color : "yellow", fontWeight : "bold"}}> {nowStr}  */ /* 인라인으로 스타일 적용*/}
        {/* <div style={st}> */}
        <div className={style.c1}>
            {ctime.toLocaleTimeString()}
        </div>
        </>
    );
}

export default MyClockTime;