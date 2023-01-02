export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-xl bg-dark text-opacity-100 bg-opacity-75 navbar-dark fixed-top h5 row px-5">
        <div className="container">
          <a href="https://www.google.pl/" className="gradient navbar-brand"><span>BRZOZA</span><small>.dev</small></a> 

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu" 
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="https://www.google.pl/" className="nav-link link-light navbar-item"><small>ABOUT ME</small></a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.pl/" className="nav-link link-light navbar-item"><small>MY WORK</small></a>
              </li>
              <li className="nav-item">
                <a href="https://www.google.pl/" className="nav-link link-light navbar-item"><small>CONTACT</small></a>
              </li>
              <li className="nav-item pt-1">
                <a href="https://www.google.pl/" className="nav-link link-light navbar-item">
                    <ion-icon name="logo-github" class="d-none d-xl-block navbar-icon navbar-item"></ion-icon>
                    <small className="d-block d-xl-none link-light">GIT HUB</small>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}