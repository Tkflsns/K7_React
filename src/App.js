import './App.css';
import { FcHome } from "react-icons/fc";
import { Routes, Route, BrowserRouter,Link } from 'react-router-dom';
// import imgLogo from '../public/logo512.png'

import MyClock from './02/Myclock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
// import Traffic_main from './08/Traffic_main';
// import TrafficNav from './08_1/TrafficNav';
import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
// import RouteMain from './12/RouteMain';
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';

function App() {
  
  return (
    <BrowserRouter>
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-5 bg-orange-100'>
        <p>리액트 실습</p>
        <ul className='flex'>
          <li className='mr-1.5'><Link to='/'>시계</Link></li>
          <li className='mr-1.5'><Link to='/lotto'>로또</Link></li>
          <li className='mr-1.5'><Link to='/box'>박스오피스</Link></li>
          <li className='mr-1.5'><Link to='/food'>푸드마켓</Link></li>
          <li className='mr-1.5'><Link to='/traffic'>교통사고</Link></li>
          <li className='mr-1.5'><Link to='/gal'>관광정보</Link></li>
          <li className='mr-1.5'><Link to='/fes'>부산축제정보</Link></li>
          <li className='mr-1.5'><Link to='/frcst'>단기예보</Link></li>
        </ul>
        <Link to='/clock'><FcHome className='text-3xl text-neutral-50'/></Link>
      </header>
      <main className='grow'>
        <Routes>
        <Route path='/' element = {<MyClock />} />
        {/* <img src={imgLogo} alt="logo" /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        <Route path='/lotto' element = {<Lotto />} />
        <Route path='/box' element = {<BoxOffice />} />
        <Route path='/food' element = {<FoodMain />} />
        {/* <Traffic_main /> */}
        {/* <TrafficNav /> */}
        <Route path='/traffic' element = {<Traffic />} />
        {/* <MyRef /> */}
        <Route path='/gal' element = {<Gallery />} />
        <Route path='/fes' element = {<Festival/>} />
        <Route path='/frcst' element = {<Frcst/>} />
        <Route path='/frcstlt' element = {<FrcstList/>} />
        {/* <RouteMain /> */}
        </Routes>
      </main>
      <footer className='flex justify-center items-center h-20 bg-slate-200'>
        Park Jung Hyun, K-Digital
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
