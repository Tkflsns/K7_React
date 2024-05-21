import TrafficNav from "./TrafficNav"
import { useState, useEffect } from "react"

export default function Traffic() {
    const [tdata, setTdata] = useState();   //fetch 데이터

    const [c1, setC1] = useState();
    const [selC1, setSelC1] = useState();

    const [c2, setC2] = useState();
    const [selC2, setSelC2] = useState();

    const [info, setInfo] = useState();

    //사용자 정의함수
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err));
    }

    //컴포넌트 생성시
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:34f1f0b1-1289-49db-be1b-a4566880bb97?';
        url = `${url}perPage=17&serviceKey=${process.env.REACT_APP_API_KEY}`;

        console.log(url);
        getFetchData(url);
    }, []);

    //tdata변경될때
    useEffect(() => {
        if (!tdata) return; //데이터가 없을땐 넘기기

        let tm = tdata.map(item => item['사고유형대분류'])
        tm = [...new Set(tm)]
        setC1(tm)
        console.log(tm)
        console.log(tdata)
    }, [tdata])

    useEffect(() => {
        if (!tdata || !c1) return;
        console.log("c1 = ", c1)
    }, [c1])

    // 대분류를 선택하면 => c2생성
    useEffect(() => {
        if (!tdata || !c1) return;

        let tm = tdata.filter(item => item['사고유형대분류'] === selC1).map(item => item['사고유형중분류']);
        tm = [...new Set(tm)]
        setC2(tm)
        setInfo('')
        console.log("중분류 =>", tm);
    }, [selC1])

    useEffect(() => {
        if (!tdata || !c1 || !selC1 || !selC2) return;
        console.log("대분류선택 : ", selC1)
        console.log("중분류선택 : ", selC2)

        let tm = tdata.filter(item => item['사고유형대분류'] === selC1 && item['사고유형중분류'] === selC2)

        tm = tm[0]; //object
        console.log('상세', tm);

        const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
        tm = infoKey.map(item => <div key={item}
            className="mx-1 flex flex-col">
            <div className="h-10 flex justify-center items-center bg-cyan-600 text-white font-bold">
                {item}
            </div>
            <div className="h-10 flex justify-center items-center bg-lime-200 text-black font-bold">
                {parseInt(tm[item]).toLocaleString()}
            </div>
        </div>)
        setInfo(tm);
        

    }, [selC2]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-start items-center">
                {c1 && <TrafficNav
                    title='대분류'
                    c={c1}
                    sel={selC1}
                    setsel={setSelC1}
                />
                }
            </div>

            <div className="w-full flex justify-start items-center">
                {c2 && <TrafficNav
                    title='중분류'
                    c={c2}
                    sel={selC2}
                    setsel={setSelC2}
                />
                }
            </div>

            <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                {info}
            </div>
        </div>
    )
}
