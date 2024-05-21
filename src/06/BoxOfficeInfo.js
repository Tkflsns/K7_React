export default function BoxOfficeInfo({selMv}) {
    // console.log(selMv);
    return (
        <div className="w-11/12 h-12 items-center justify-center bg-black text-white flex ">

            [{selMv.movieNm}]

            영화 개봉일 : {selMv.openDt},
            신규진입 : {selMv.rankOldAndNew === 'NEW' ? '신규' : '기존'},
            당일 매출액 : {parseInt(selMv.salesAmt).toLocaleString()},
            당일 관객수 : {parseInt(selMv.audiCnt).toLocaleString()}
        </div>
    )
}
