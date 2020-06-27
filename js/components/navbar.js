const navbarTemplate = /*html*/ `
<nav class="navbar navbar-expand-lg navbar-light mt-5">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/assets/img/logo.png" alt="ImmobilApp" height="30" />
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
          <a class="nav-link" href="#">Proprietari</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Agenzie</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chi siamo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contatti</a>
        </li>

        <li class="nav-item ml-4">
          <a class="btn btn-primary" href="#">Accedi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = navbarTemplate
  }
}

window.customElements.define("nav-bar", Navbar)
