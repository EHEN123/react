export default function Sw() {
  return (
    
    <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden">

      <div className="swiper-wrapper" aria-live="off" >
        <div className="swiper-slide" role="group" aria-label="1 / 7" data-swiper-slide-index="0" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_1.jpg" alt="베스트 리뷰 이벤트" />
        </div>
        <div className="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 7" data-swiper-slide-index="1" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_2.jpg" alt="카카오톡 선물하기" />
        </div>
        <div className="swiper-slide swiper-slide-active" role="group" aria-label="3 / 7" data-swiper-slide-index="2" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_3.jpg" alt="캠핑 푸드 빅 세일" />
        </div>
        <div className="swiper-slide swiper-slide-next" role="group" aria-label="4 / 7" data-swiper-slide-index="3" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_4.jpg" alt="라이브커머스 초특가" />
        </div>
        <div className="swiper-slide" role="group" aria-label="5 / 7" data-swiper-slide-index="4" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_5.jpg" alt="밀키트 주간 구독" />
        </div>
        <div className="swiper-slide" role="group" aria-label="6 / 7" data-swiper-slide-index="5" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_6.jpg" alt="해외 배송비 무료" />
        </div>
        <div className="swiper-slide" role="group" aria-label="7 / 7" data-swiper-slide-index="6" style={{ width: "1942px" }}>
          <img src="https://i-web.kr/green08/images/main_banner_7.jpg" alt="SNS 레시피 이벤트" />
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span className="swiper-pagination-bullet" tabIndex="0">베스트 리뷰 이벤트</span>
        <span className="swiper-pagination-bullet" tabIndex="0">카카오톡 선물하기</span>
        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" aria-current="true">캠핑 푸드 빅 세일</span>
        <span className="swiper-pagination-bullet" tabIndex="0">라이브커머스 초특가</span>
        <span className="swiper-pagination-bullet" tabIndex="0">밀키트 주간 구독</span>
        <span className="swiper-pagination-bullet" tabIndex="0">해외 배송비 무료</span>
        <span className="swiper-pagination-bullet" tabIndex="0">SNS 레시피 이벤트</span>
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  );
}
