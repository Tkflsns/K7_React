import { useSearchParams, useLocation } from "react-router-dom"

export default function RoutePage2() {
    const fruits = ['🍎', '🍌'];
    
    // const loc = useLocation();
    // console.log("loc : ", loc)

    const [sParams] = useSearchParams();
    console.log("sParams", sParams)
    // const item = sParams.get('item')

    let tm = [];
    sParams.forEach(item => fruits.includes(item)
                                ? tm.push(`${item} : 과일`)
                                : tm.push(`${item} : 과일아님`)
                            )

  return (
    <div className="flex flex-col">
        <h2>
      RoutePage2
      </h2>
      {/* <div>
        {fruits.includes(item) ? `${item} : 과일입니다.` : `${item} : 과일이아닙니다.`}
      </div> */}
      <div className="flex flex-col">
        {tm}
      </div>
    </div>
  )
}
