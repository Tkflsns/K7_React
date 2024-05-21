import { hover } from "@testing-library/user-event/dist/hover"

export default function ButtonC({caption, bcolor, handleClick}) {
    const colorB = {
        'blue' : 'bg-blue-600',
        'orange' : 'bg-orange-600'
    }

    const colorBHover = {
        'blue' : 'hover:bg-blue-800',
        'orange' : 'hover:bg-orange-800'
    }
  return (
    <button className={`inline-flex px-10 py-3 mx-2 rounded-md justify-center items-center
                     text-white font-bold ${colorB[bcolor]} ${colorBHover[bcolor]}`}
            onClick={handleClick}>
      {caption}
    </button>
  )
}
