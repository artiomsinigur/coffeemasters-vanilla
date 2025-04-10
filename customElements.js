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
        const templateContent = document.getElementById('product-item-template').content
        this.root.appendChild(templateContent.cloneNode(true))
        console.log('Product template')
    }
}

// 2. Define a custom element class
class Accordion extends HTMLElement {
    constructor() {
        super()
        // 3. Attach shadow DOM
        this.root = this.attachShadow({ mode: 'open' })
        // 4. Clone template content and append to shadow DOM
        const template = document.getElementById('accordion-item-template')
        const content = template.content.cloneNode(true)    
        this.root.appendChild(content)
    }
    
    connectedCallback() {
        const accordionDetails = this.root.querySelector('.accordion-details')
        const url = this.getAttribute('url')
        accordionDetails.addEventListener('click', () => {
            console.log(url)
        })
    }
}

customElements.define('my-element', MyElement)
customElements.define('product-item', ProductTemplate)
// 5. Register the custom element
customElements.define('accordion-item', Accordion)
