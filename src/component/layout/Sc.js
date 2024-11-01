import images from '../product/swImg'; //스와이퍼 이미지 유지보수(지우면x)

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';


export default function Sc() {
  return (
    <section className="main py-0 px-4 pt-5" id="header">
      <div className="pcVisual container-fluid overflow-hiddens d-none d-md-flex pt-3 mt-5">
        <div className="box01 mainBanner row align-items-center col-7 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-between align-items-center">
              <svg className="mainIcon" width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M37.0056 131C48.4675 131 58.7122 125.789 65.5001 117.607C72.2879 125.789 82.5327 131 93.9945 131C114.432 131 131 114.432 131 93.9945C131 82.5327 125.789 72.2879 117.607 65.5001C125.789 58.7122 131 48.4675 131 37.0056C131 16.568 114.432 0 93.9945 0C82.5327 0 72.2879 5.21094 65.5001 13.393C58.7122 5.21094 48.4675 0 37.0056 0C16.568 0 0 16.568 0 37.0056C0 48.4675 5.21094 58.7122 13.393 65.5001C5.21094 72.2879 0 82.5327 0 93.9945C0 114.432 16.568 131 37.0056 131Z" fill="black" fillOpacity="0.7" />
              </svg>
              <h1 className="line blur-target mx-3 mb-0"></h1>
              <div className="text01 d-flex flex-column align-items-end justify-content-right">
                <h1 className="blur-target lh-sm fs-lg-6 fs-xxl-7 hover-effect">LITTLE SPECIAL</h1>
                <h1 className="blur-target thin lh-sm fs-lg-6 fs-xxl-7">THINGS IN</h1>
              </div>
            </div>
            <h1 className="blur-target black lh-sm fs-lg-6 fs-xxl-7">EVERYDAY LIFE</h1>
            <p className="blur-target text-700">Small changes that seep into your daily life, join Pocoar.</p>
            <div className="button"><a className="Lbtn btn-sm btn-warning rounded-pill" href="#!"><i className="fas fa-camera me-2"></i>VIEW DETAIL</a></div>
          </div>
          <div className="row">
            <div className="loofText col-12 blur-target">
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
              <span className="Ltext"> A little sparkle in everyday life</span>
            </div>

 <div className="slide gx-2 col-12">
            <div className="scroll_wrap">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 3, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 10 },
                  992: { slidesPerView: 3, spaceBetween: 10 },
                  1200: { slidesPerView: 3, spaceBetween: 10 },
                  1400: { slidesPerView: 3, spaceBetween: 10 }
                }}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img className="w-100" src={src} alt={`product-${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          </div>
        </div>
        <div className="box02 mt-0 mb-4 ms-4 d-flex align-items-center justify-content-center w-100">

        </div>
      </div>
      <div className="mdVisual container-fluid d-flex flex-column d-md-none mt-5 px-0 min-vh-75">
        <div className="visualImg d-flex justify-content-center align-items-center mb-3 bg-primary flex-1 text-white">여기 이미지</div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="loofText col-12 blur-target">
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
            <span className="Ltext"> This text loops infinitely around the x-axis</span>
          </div>
        </div>
        <div className="slide gx-2 col-12">
          <div className="scroll_wrap">
            <div className="swiper-container pb-4 overflow-hidden" data-pagination-target="pagination1">

              {/* 스와이퍼 되면 나중에 여기에 넣도록. */}
                  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
