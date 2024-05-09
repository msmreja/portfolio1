import './header.css'

const Header = () => {
    return (
        <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          @msmreja
        </a>

        <div className="nav__menu">
          <ul className="nav__list grig">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-info-circle nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-award nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <i className="uil uil-book nav__icon"></i>Experience
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-book nav__icon"></i>Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                className='nav__link'
                // onClick={() => setActiveNav("#projects")}
                // className={
                //   activeNav === "#projets"
                //     ? "nav__link active-link"
                //     : "nav__link"
                // }
              >
                <i className="uil uil-suitcase nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-at nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
    )
}

export default Header;
