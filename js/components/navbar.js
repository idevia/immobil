const navbarTemplate = /*html*/ `
<nav class="navbar navbar-expand-lg navbar-light mt-2">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src="/assets/img/logo.png" alt="ImmobilApp" height="40" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="./proprietari.html">Proprietari</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./agenzie.html">Agenzie</a>
        </li>
        <li class="nav-item">
          <a href="./pricing.html" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./chi-siamo.html">Chi siamo</a>
        </li>
        <li class="nav-item">
          <a href="./contatti.html" class="nav-link">Contatti</a>
        </li>

        <li class="nav-item ml-4">
          <a class="btn btn-primary nav-btn" href="https://app.immobilapp.it/">Accedi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = navbarTemplate

    const navbarLinks = this.querySelectorAll('.navbar-nav .nav-link')
    const linkLocationArr = window.location.href.toString().split('/')
    const linkLocation = linkLocationArr[linkLocationArr.length - 1].split('.')[0]

    switch (linkLocation) {
      case 'proprietari':
        navbarLinks[0].classList.add('link-active')
        break
      case 'agenzie':
        navbarLinks[1].classList.add('link-active')
        break
      case 'pricing':
        navbarLinks[2].classList.add('link-active')
        break
      case 'chi-siamo':
        navbarLinks[3].classList.add('link-active')
        break
      case 'contatti':
        navbarLinks[4].classList.add('link-active')
        break
      default:
        break
    }
  }
}

window.customElements.define('nav-bar', Navbar)
