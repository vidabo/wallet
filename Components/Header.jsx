import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "Wallet",
      link: "/create",
    },
    {
      name: "Espace Privé",
      link: "https://secure.alliance360.club/auth/login.php",
    },
  ];
  return (
    <header class="header-one">
      <div class="header-menu-area header-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
              <div class="logo">
                <a href="/">
                  <img src="img/logo/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-9">
              <div class="header-right ">
                <a href="#" class="top-btn coin-btn">
                  DON
                </a>
              </div>
              <div class="header_menu f-right">
                <nav id="mobile-menu">
                  <ul className="new-nav-class" class="main-menu">
                    {menuList.map((menu, i) => (
                      <li class="resulta" key={i + 1}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
