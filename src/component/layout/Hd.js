export default function Hd() {
  return (
    <main className="main" id="top">
      {/* nav 전체 */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top d-block my-3 mx-4"
        data-navbar-on-scroll="data-navbar-on-scroll" >
        <div className="container">
          <a className="navbar-brand d-inline-flex me-0" href="index.html">
            {/* 로고 */}
            <img
              className="logo card-img d-lg-none"
              src="https://raw.githubusercontent.com/EHEN123/boot5/72e0b273717e98543ffb6125751b76754e245543/logo.svg"
              alt="logo"/>
          </a>

          {/* 토글(반응형) */}
          <button
            className="navBtn navbar-toggler collapsed d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" >

            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse border-lg-0 mt-lg-0 d-lg-flex justify-content-between"
            id="navbarSupportedContent">
            <a className="navbar-brand d-inline-flex me-0" href="index.html">
              <img
                className="logo card-img d-none d-lg-block"
                src="https://raw.githubusercontent.com/EHEN123/boot5/72e0b273717e98543ffb6125751b76754e245543/logo.svg"
                alt="logo"/>
            </a>

            {/* nav */}
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item px-2 ps-lg-0 hover-target">
                <a className="nav-link fw-bold" aria-current="page" href="#top">HOME</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold" href="#aboutUs">ABOUT US</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold" href="#product">PRODUCT</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-bold" href="#1dClass">1Day CLASS</a>
              </li>
            </ul>

            {/* UI */}
            <div className="d-none d-lg-flex">
              <form className="form d-flex justify-content-center gap-3">
                <a href="##">
                  <img
                    className="search"
                    src="https://raw.githubusercontent.com/EHEN123/boot5/657517aa0197fdb0d0ea907a9460fff91d69b059/search.svg" alt="search" />
                </a>
                <a href="##">
                  <img
                    className="mypage"
                    src="https://raw.githubusercontent.com/EHEN123/boot5/bd84ec3e05da5bd93ed2068fe367ca360d445ce9/person.svg" alt="mypage" />
                </a>
                <a href="##">
                  <img
                    className="bag"
                    src="https://raw.githubusercontent.com/EHEN123/boot5/bd84ec3e05da5bd93ed2068fe367ca360d445ce9/bag.svg"
                    alt="bag" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

