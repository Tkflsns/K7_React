import './App.css';
import { FcHome } from "react-icons/fc";
import imgLogo from '../public/logo512.png'

// import MyClock from './02/Myclock';
// import MyDiv from './03/MyDiv';

function App() {
  
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-orange-100'>
        <p>Header</p>
        <p>K-digital</p>
        <FcHome className='text-3xl text-neutral-50'/>
      </header>
      <main className='grow'>
        <img src={imgLogo}>
      </main>
      <footer className='flex justify-center items-center h-20 bg-slate-200'>
        Footer
      </footer>
    </div>
  );
}

export default App;
