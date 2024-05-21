// 
import GalleryCard from "../10/GalleryCard"
import { useState, useEffect, useRef } from "react";
import TailSelect from "./TailSelect";

export default function Festival() {
    const [festi, setFesti] = useState();
    const [fdata, setFdata] = useState();
    const [selGu, setSelGu] = useState();
    const selRef = useRef();

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setFesti(data.getFestivalKr.item))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?';
        url = url + `serviceKey=${process.env.REACT_APP_GAL_KEY}&pageNo=1&numOfRows=37&resultType=json`
        getFetchData(url);
    }, []);
    
    useEffect(() => {
        if (!festi) return;
        let tm = festi.map(item => item['GUGUN_NM'])
        tm = [...new Set(tm)]
        setSelGu(tm)
        console.log("selgu",tm)
    }, [festi])

    const handleGuselect = (e) => {
        e.preventDefault();
        console.log("input", selRef.current.value);
        let data = festi.filter(item => item.GUGUN_NM === selRef.current.value).map(item =>
            <GalleryCard imgUrl={item['MAIN_IMG_THUMB']}
                title={item['TITLE']}
                content={item['MAIN_PLACE']}
                spTag={item['ADDR1']}
                key={item['LAT']} />
        );
        setFdata(data);
    }
    return (
        <div>
            <div>
                {selGu && <TailSelect id="op"
                    ops={selGu}
                    selRef={selRef}
                    initText="---부산 지역구 선택---"
                    handleChange={handleGuselect}
                />}
            </div>
            <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">
                {fdata}
            </div>
        </div>
    )
}
