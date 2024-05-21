import { useParams } from "react-router-dom"

export default function RoutePage1() {

    const item = useParams().item;
    console.log(item)

    const fruits = ['🍎', '🍌'];
  return (
    <div>
        <h1>
      RoutePage1 : {item}
      </h1>
      <div>
        {fruits.includes(item) ? `${item} : 과일입니다.` : `${item} : 과일이아닙니다.`}
      </div>
    </div>
  )
}
