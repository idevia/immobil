const footerTemplate = /*html*/ `
<div class="footer">
<div class="container">
  <div class="footer__logo">
    <img src="/assets/img/logo.png" alt="ImmobilApp" height="30" />
  </div>
  <div class="row py-4">
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Contact Us</h6>
      <div class="footer__list">
        <ul>
          <li>+(290) 520-7927</li>
          <li>Bangalore India</li>
          <li>idevia.in</li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Our Company</h6>
      <div class="footer__list">
        <ul>
          <li>About</li>
          <li>Product</li>
          <li>Portfolio</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Social Contacts</h6>
      <div class="footer__list">
        <ul>
          <li>Facebook</li>
          <li>Linked in</li>
          <li>Youtube</li>
          <li>Vimeo</li>
          <li>Skype</li>
        </ul>
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      <h6 class="font-weight-bold">Address</h6>
      <div class="footer__list">
        <ul>
          <li>
            Idevia Tech Private Limited<br />
            Kolkata, India
          </li>
          <li>
            <h6 class="font-weight-bold">Follow us</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="footer__copyright">
  <p>Copyright@ReSmart 2020</p>
</div>
</div>
`

class Footer extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = footerTemplate
  }
}

window.customElements.define("site-footer", Footer)
