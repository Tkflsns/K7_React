

export default function BoxOfficeHeader() {
  return (
    <thead
    className="border-b border-neutral-200 font-medium bg-black text-white">
    <tr>
      <th scope="col" className="px-6 py-4">순위</th>
      <th scope="col" className="px-6 py-4">영화명</th>
      <th scope="col" className="px-6 py-4">매출액</th>
      <th scope="col" className="px-6 py-4">관객수</th>
      <th scope="col" className="px-6 py-4">랭크증감율</th>
    </tr>
  </thead>
  )
}
