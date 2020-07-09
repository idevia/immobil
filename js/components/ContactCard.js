const contactCardTemplate = /*html*/ `
<div class="contact-merits__card">
<div class="row d-flex align-items-end">
  <div class="col-md-3 col-sm-3">
    <img class="contact-merits__card__icon" alt="" />
  </div>
  <div class="col-md-9 col-sm-9 mt-3">
    <h5 class="contact-merits__card__title font-weight-bold">
    </h5>
  </div>
</div>
<p class="contact-merits__card__content mt-2">
</p>
</div>
`

class ContactCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = contactCardTemplate
    this.querySelector(".contact-merits__card__title").innerHTML = this.getAttribute(
      "title"
    )
    this.querySelector(".contact-merits__card__content").innerHTML = this.getAttribute(
      "content"
    )
    this.querySelector(".contact-merits__card__icon").src = this.getAttribute("imgSrc")
  }
}

window.customElements.define("contact-card", ContactCard)
