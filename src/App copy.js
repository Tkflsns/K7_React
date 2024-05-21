import './App.css';
import { FcHome } from "react-icons/fc";
// import imgLogo from '../public/logo512.png'

// import MyClock from './02/Myclock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodMain from './07/FoodMain';
// import Traffic_main from './08/Traffic_main';
// import TrafficNav from './08_1/TrafficNav';
// import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
// import Gallery from './10/Gallery';
// import Festival from './11/Festival';
// import RouteMain from './12/RouteMain';

function App() {
  
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-5 bg-orange-100'>
        <p>리액트 실습</p>

        <FcHome className='text-3xl text-neutral-50'/>
      </header>
      <main className='grow'>
        {/* <MyClock />
        <img src={imgLogo} alt="logo" />
        <MyDiv1 />
        <MyList />
        <Lotto /> */}
        {/* <BoxOffice /> */}
        {/* <FoodMain />
        <Traffic_main />
        <TrafficNav />
        <Traffic />
        <MyRef /> */}
        {/* <Gallery /> */}
        {/* <Festival/> */}
        {/* <RouteMain /> */}
      </main>
      <footer className='flex justify-center items-center h-20 bg-slate-200'>
        Park Jung Hyun, K-Digital
      </footer>
    </div>
  );
}

export default App;
