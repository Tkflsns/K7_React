import ButtonC from "../05/ButtonC"
import { useNavigate } from "react-router-dom"

export default function FrcstNav() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-between items-center mt-4 mb-2">
            <div className="font-bold text-xl">
                <p>기상청 단기예보</p>
            </div>
            <div>
                <ButtonC caption="단기예보 메인"
                    bcolor="blue"
                    handleClick={() => { navigate("/frcst") }} />
            </div>
        </div>
    )
}
