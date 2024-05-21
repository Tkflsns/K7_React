import fooddata from './fooddata.json';
import ButtonC from '../05/ButtonC';
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FoodMain() {
    // console.log(fooddata);
    const [c1List, setC1List] = useState([]);
    let c1 = fooddata.map(item => item['운영주체 분류']);

    // console.log(c1);
    let c2 = new Set(c1);
    c2 = [...c2];

    console.log("c2", c2);

    const handleC1 = (c) => {
        // 카테고리에 따라 필터링된 fooddata로부터 FoodCard 컴포넌트 생성
        console.log('c', c);
        let tm = fooddata.filter(item =>
             item['운영주체 분류'] === c).map(item =>
                 <FoodCard data={item} key={item['사업장명']} />)
        console.log('tm', tm);
        setC1List(tm);
    }; 
    const c1Bts = c2.map(item =>
        <ButtonC caption={item}
            bcolor={'blue'}
            handleClick={() =>
                handleC1(item)}
        />
    );
    return (
        <div className='flex flex-col w-full h-full
                         justify-start items-center'>
            <div className='flex w-full my-5 px-2 justify-between items-center'>
                {c1Bts}
            </div>
            <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-4'>
                {c1List}
            </div>
        </div>
    )
}
