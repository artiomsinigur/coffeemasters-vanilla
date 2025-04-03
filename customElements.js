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

class ProductTemplate extends HTMLElement {
    constructor() {
        super()
        // Create a shadow DOM root for the custom element
        // This allows for encapsulation of styles and markup. A private, isolated DOM tree
        // that is separate from the main document DOM tree.
        // By default the shadow DOM is closed, meaning it cannot be accessed from outside the element.
        // By default, CSS styles declared in the main DOM are not applied to the shadow DOM.
        // There are new pseudo-elements that allow you to style the shadow DOM from the main DOM.
        // See: https://developer.mozilla.org/en-US/docs/Web/CSS/::part 
        this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const template = document.getElementById('product-item-template')
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)
        console.log('Product template')
    }
}

customElements.define('home-page', HomePage)
customElements.define('order-page', OrderPage)
customElements.define('my-element', MyElement)
customElements.define('product-item-template', ProductTemplate)