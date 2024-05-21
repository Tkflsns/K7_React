import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export default function BoxOfficeBody({ dailyList, setSelMv }) {
    // console.log(dailyList);
    const handleMvSelect = (mv) => {
        // console.log("handleMvSelect", mv)
        setSelMv(mv);
    }
    const tags = dailyList.map(item =>
        <tr key={item.movieCd} onClick= {() => {handleMvSelect(item)}}
            className="border-b border-neutral-200 hover:bg-neutral-100">
            <td className="whitespace-nowrap px-6 py-3 font-medium">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-3">{item.movieNm}</td>
            <td className="whitespace-nowrap px-6 py-3 text-right">{parseInt(item.salesAcc).toLocaleString()}원</td>
            <td className="whitespace-nowrap px-6 py-3 text-right">{item.audiAcc}명</td>
            <td className="px-2 py-2 flex justify-center items-center font-bold">
                <span>
                    {parseInt(item.rankInten) === 0 ? '—' : parseInt(item.rankInten) < 0 ? <AiFillCaretDown className="text-blue-600"/> : <AiFillCaretUp className="text-red-600"/>}
                </span>
                <span>
                {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
                </span>
            </td>
        </tr>
    )
    return (
        <tbody>
            {tags}
        </tbody>
    )
}
