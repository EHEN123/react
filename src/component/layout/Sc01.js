import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS를 불러옵니다.

export default function Sc01() {
  useEffect(() => {
    AOS.init({
      duration: 600, // 애니메이션 지속 시간 (밀리초)
      once: false,   // true로 설정하면 애니메이션이 한 번만 실행됨
    });
  }, []);

  return (
    <section className="py-4 bg-dark text-white target-section" id="aboutUs">
      <div className="container-xxl py-3">
        <div className="row flex-center h-100">
          <div className="col-12">
            <div className="c01text">
              <h1 data-aos="fade-up">My Favorite Thing's</h1>
              <h5 data-aos="fade-up" className="mt-3">
                “ 소소한 일상이 예술로 변하는 순간,<br /> 포코아르와 함께하세요. ”
              </h5>
              <div className="star d-flex justify-content-center my-3" data-aos="fade-up">
                <img src="https://raw.githubusercontent.com/EHEN123/boot5/23d0a9845164b98da14eff86467772952017f6be/star.svg" alt="star" />
                <img src="https://raw.githubusercontent.com/EHEN123/boot5/23d0a9845164b98da14eff86467772952017f6be/star.svg" alt="star" />
                <img src="https://raw.githubusercontent.com/EHEN123/boot5/23d0a9845164b98da14eff86467772952017f6be/star.svg" alt="star" />
              </div>
              <div data-aos="fade-up">
                <p>포코아르는 <br />POCO(조금씩) + COAR(스며들다)라는 의미로,</p>
                <p className="pt">블루베리를 먹었을 때 입술이 파랗게 물드는 것처럼 <br />일상에 조금씩 스며들어</p>
                <p className="pt">작은 변화와 더불어 편의성까지 만족시킬 수 있는 <br />차별화된 컬러감의 세라믹&아트 상품을 제안합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
