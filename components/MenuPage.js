export class MenuPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })

        const styles = document.createElement('style')
        this.root.appendChild(styles)

        // Fetch the CSS file and apply it to the shadow DOM
        async function fetchMenu() {
            const request = await fetch('/components/MenuPage.css')
            const css = await request.text()
            styles.textContent = css
        }
        fetchMenu()
    }
    
    connectedCallback() {
        const template = document.getElementById('menu-page-template')
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)
    }
}

customElements.define('menu-page', MenuPage)