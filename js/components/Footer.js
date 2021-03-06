const footerTemplate = /*html*/ `
<div class="footer">
  <div class="container">
  <div class="row">
    <div class="col-12 text-center">
      <div class="footer__logo">
        <img src="/assets/img/logo.png" alt="ImmobilApp" height="30" />
      </div>
    </div>
  </div>
  <div class="row py-4">
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Contact Us</h6>
      <div class="footer__list">
        <ul>
          <li><a href="tel:+390690258948">(+39) 069-025-8948</a></li>
          <li><a href="mailto:info@immobilapp.it">info@immobilapp.it</a></li>
          <li>P.IVA: 15501131005</li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Our Company</h6>
      <div class="footer__list">
        <ul>
          <li><a href="./chi-siamo.html" class="text-decoration-none">Chi siamo</a></li>
          <li><a href="./faq.html" class="text-decoration-none">FAQ</a></li>
          <li>Career</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Social Contacts</h6>
      <div class="footer__list">
        <ul>
          <li><a href="https://facebook.com/Immobilapp" target="_blank" class="text-decoration-none">Facebook</a></li>
          <li><a href="https://instagram.com/immobilapp" target="_blank" class="text-decoration-none">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Address</h6>
      <div class="footer__list">
        <ul>
          <li>
            Immobilapp di MPM srl<br />
            Via G. Zanardelli 5, 00186 - Roma
          </li>
          <!--<li>
            <h6 class="font-weight-bold mt-4">Follow us</h6>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="footer__copyright">
  <p>Copyright @2020 Immobilapp</p>
</div>
</div>
`

class Footer extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = footerTemplate
  }
}

window.customElements.define('site-footer', Footer)
