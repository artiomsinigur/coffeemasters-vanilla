/**
 * Custom elements are a way to create your own HTML elements.
 * They are part of the Web Components standard.
 */

class MyElement extends HTMLElement {
    constructor() {
        super()
        this.dataset.language = 'en'
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        this.innerHTML = `<h1>Hello World</h1>`
        console.log('Connected to the DOM')
    }

    // Called when the element is removed from the DOM
    disconnectedCallback() {
        console.log('Disconnected from the DOM')
    }

    // Called when the element is moved to a new document
    adoptedCallback() {
        console.log('Adopted')
    }

    // Called when the element's attributes are changed
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Attribute changed', name, oldValue, newValue)
    }
}

class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Home</h1>`
        console.log('Home Page Connected')
    }

    disconnectedCallback() {
        console.log('Home Page Disconnected')
    }
}

class OrderPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Order</h1>`
        console.log('Order Page Connected')
    }

    disconnectedCallback() {
        console.log('Order Page Disconnected')
    }
}

customElements.define('home-page', HomePage)
customElements.define('order-page', OrderPage)
customElements.define('my-element', MyElement)