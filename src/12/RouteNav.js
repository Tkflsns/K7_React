import { useNavigate } from "react-router-dom";
import ButtonC from "../05/ButtonC";

export default function RouteNav() {
    const navigate = useNavigate()
  return (
    <div className="w-full grid grid-cols-3 m-10">
      <ButtonC caption="Home"
                bcolor="blue"
                handleClick={() => {navigate("/")}}/>
      <ButtonC caption="Page1"
                bcolor="blue"
                handleClick={() => {navigate("/p1/1")}}/>
      <ButtonC caption="Page2"
                bcolor="blue"
                handleClick={() => {navigate("/p2")}}/>
    </div>
  )
}
