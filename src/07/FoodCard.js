import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'

import { useState } from 'react';

export default function FoodCard({data}) {
    console.log('data', data)
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
    };

    return (
        <div className='flex'>
            <div>
                <img src={data['구분'] === '광역지원센터' ? busan : data['구분'] === '기초푸드뱅크' ? bank : market} />
            </div>
            <div>
                <div>
                    <h1>{data['사업장명']}</h1>
                    <p>{data['운영주체명']}</p>
                    <p>{data['사업장 소재지']}</p>
                    {isShow && (<p className='text-white font-bold bg-slate-700'>{data['연락처(대표번호)']}</p>)}
                </div>
            </div>
        </div>
    )
}