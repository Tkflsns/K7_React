

export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-orange-600',
        'b1' : 'bg-lime-600',
        'b2' : 'bg-sky-600',
        'b3' : 'bg-violet-600',
        'b4' : 'bg-rose-600',
        'b5' : 'bg--600',
        'b6' : 'bg--600',
    }
  return (
    <div className={`inline-flex w-16 h-16 
                     items-center justify-center
                    rounded-full text-white text-2xl
                    font-bold  
                    ${colorN["b"+ Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
