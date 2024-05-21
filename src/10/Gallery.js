import GalleryCard from "./GalleryCard";
import { useState, useEffect, useRef} from "react";


export default function Gallery() {
    const [gallery, setGallery] = useState();
    const [gData, setGdata] = useState();
    const inRef = useRef();

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setGallery(data.response.body.items.item))
            .catch(err => console.log(err))

    }
    // useEffect(() => {
        
    //     // const encoder = new TextEncoder();
    //     // let encoded = encoder.encode(inRef.current.value);
    //     // if(encoded === '')
    //     //     encoded = '%ED%83%9C%EC%A2%85%EB%8C%80'
    //     // let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
    //     // url = url + `serviceKey=${process.env.REACT_APP_GAL_KEY}`;
    //     // url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&';
    //     // url = url + `keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`;
        
    //     // console.log(url);
    //     // getFetchData(url);
    // }, []);

    useEffect(() => {
        console.log('gal : ', gallery)
        if (!gallery) return ;
        let data = gallery.map(item =>
            <GalleryCard imgUrl={item.galWebImageUrl}
                title={item.galTitle}
                content={item.galPhotographyLocation}
                spTag={item.galSearchKeyword}
                key={item.galContentId} />
        );
        setGdata(data)
    }, [gallery]);

    const handleOK = (e) => {
        e.preventDefault();
        console.log("input", inRef.current.value)
        if(inRef.current.value === ''){
            alert('키워드를 입력하세요.')
            inRef.current.focus();
            return;}
        let encoded = encodeURIComponent(inRef.current.value)
        console.log("encoded", encoded)
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${process.env.REACT_APP_GAL_KEY}`;
        url = url + '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&';
        url = url + `keyword=${encoded}&_type=json`;

        getFetchData(url)
    }

    const handleDel = (e) => {
        e.preventDefault();
        setGallery('');
        setGdata('');
        inRef.current.value = '';
        inRef.current.focus();
    }

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <div className="w-full flex justify-center items-center my-5 h-40">
                <input type="text" id="sId" ref={inRef}
                    className="bg-gray-50 border border-gray-300 text-gray-900"></input>
                <button class="bg-blue-500 hover:bg-blue-400 text-white
                             font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                onClick={handleOK}>
                    확인
                </button>
                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2
                                px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                                onClick={handleDel}>
                    취소
                </button>
            </div>
            <div className="w-full grid grid-cols-1 
                    md:grid-cols-2 lg:grid-cols-3 
                    gap-2">
                {gData}
            </div>
        </div>
    )
}