export class MenuPage extends HTMLElement {
    constructor() {
        super()

        // this.attachShadow({ mode: 'open' })
    }
    
    connectedCallback() {
        const template = document.getElementById('menu-page-template')
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}

customElements.define('menu-page', MenuPage)