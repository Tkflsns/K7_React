import React from 'react'

export default function TailSelect({id, ops, initText, handleChange, selRef}) {
    // console.log("tag", ops);
    const opTag = ops.map(item =>
                             <option key = {item}
                                        value={item}>{item}</option>)
    return (
        <div>
            <select id={id}
                ref = {selRef}
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300
                           text-gray-900 text-sm rounded-lg
                           focus:ring-blue-500 focus:border-blue-500
                           block w-full p-2.5'>
                <option defaultValue=''>{initText}</option>
                {/* <option value="수영구">수영구</option>
                <option value="영도구">영도구</option>
                <option value="해운대구">해운대구</option>
                <option value="금정구">금정구</option>
                <option value="북구">북구</option>
                <option value="부산진구">부산진구</option>
                <option value="중구">중구</option>
                <option value="동구">동구</option>
                <option value="동래구">동래구</option>
                <option value="사상구">사상구</option>
                <option value="강서구">강서구</option>
                <option value="사하구">사하구</option>
                <option value="기장군">기장군</option> */}
                {opTag}
            </select>
        </div>
    )
}
