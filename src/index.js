import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';

// layout 공통
import Top from './component/layout/Top';
import Hd from './component/layout/Hd';
import Sw from './component/layout/Sw';
import Fd from './component/layout/Fd';
import Sc01 from './component/layout/Sc01';

// custom
import './scss/common.scss';
import './scss/sc.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Top />
    <Hd />
    <Sw />
    <div className='vh'></div>
    {/* 이곳에..메인이 들어갈 예정이었다.. */}
    <Sc01 />
    <Fd />
  </>
);
