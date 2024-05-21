import ButtonC from "../05/ButtonC";

export default function TrafficNav({title, c, sel, setsel}) {
    const cTag = c.map(item =>
        <ButtonC caption={item}
            key = {item}
            bcolor={sel === item ? 'orange' : 'blue'}
            handleClick={() => handleClick(item)}
        />
    );

    //버튼이 눌러지면
    const handleClick = (item) => {
        console.log(item);
        setsel(item);
    }

    return (
        <div className="w-full flex justify-start items-center my-5">
            <div className="w-1/5 flex justify-start items-center">
                교통사고 {title}
            </div>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {cTag}
            </div>
        </div>
    )
}
