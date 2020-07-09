const pricingCard = /*html*/ `
<div class="pricing__card mt-md-0 mt-3">
  <div class="pricing__card__period text-center py-3">
    <h4></h4>
    <p class="text-white"></p>
  </div>
  <h2 class="text-center pt-4 pb-1"></h2>
  <p class="price__subtitle text-center text-white"></p>
  <div class="pricing__card__label">
    <h4 class="font-weight-bold"></h4>
  </div>
</div>
`

class PricingCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = pricingCard

    if (this.getAttribute('center'))
      this.querySelector('.pricing__card').style.zoom = '1.2'

    this.querySelector('.pricing__card').style.backgroundColor = this.getAttribute(
      'cardBg'
    )

    this.querySelector(
      '.pricing__card__period'
    ).style.backgroundColor = this.getAttribute('cardPeriodBg')
    this.querySelector('.pricing__card__period h4').innerHTML = this.getAttribute(
      'cardPeriodTitle'
    )
    this.querySelector('.pricing__card__period p').innerHTML = this.getAttribute(
      'cardPeriodSubtitle'
    )

    this.querySelector('.pricing__card h2').innerHTML = this.getAttribute('price')
    this.querySelector('.pricing__card .price__subtitle').innerHTML = this.getAttribute(
      'priceSubtitle'
    )
    this.querySelector('.pricing__card__label h4').innerHTML = this.getAttribute(
      'labelText'
    )
  }
}

window.customElements.define('pricing-card', PricingCard)
