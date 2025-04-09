export class OrderPage extends HTMLElement {
    constructor() {
        super()
        // this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.innerHTML = `<h1>Order</h1>`
        console.log('Order Page Connected')
    }

    disconnectedCallback() {
        console.log('Order Page Disconnected')
    }
}

customElements.define('order-page', OrderPage)