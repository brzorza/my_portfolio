export default function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-dark text-opacity-100 bg-opacity-75 navbar-dark py-2 fixed-top">
        <div class="container">
          <a href="#" class="navbar-brand"><b><span>BRZOZA</span></b><small>.dev</small></a> 

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu" 
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#about" class="nav-link link-light"><small>ABOUT ME</small></a>
              </li>
              <li class="nav-item">
                <a href="#work" class="nav-link link-light"><small>MY WORK</small></a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link link-light"><small>CONTACT</small></a>
              </li>
              <li class="nav-item mt-2 ms-lg-1">
                <a href="#git" class="nav-link link-light gradient"><small class="d-inline-block d-lg-none link-light">GIT HUB</small></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}