import { $, $$ } from './helpers.js';
import { loadData } from './services/Menu.js';
import Store, { ACCORDION, initStore } from './services/Store.js';
import Router, { loadRouter, routes } from './services/Router.js';

// Link to the custom elements/components
import './components/index.js';

// Set up the app object
window.app = {}
app.store = Store
app.store = Router

window.addEventListener('DOMContentLoaded', () => {
    loadData()
    loadRouter(routes)
    initStore()

    // 6. Create and insert the custom element using JS
    ACCORDION.forEach(acc => {
        const accordion = document.createElement('accordion-item')
        accordion.setAttribute('url', acc.details)
        const slots = `
            <span slot="accordion-title">${acc.title}</span>
            <div slot="accordion-content">${acc.content}</div>
            <span slot="accordion-details">${acc.details}</span>`
        accordion.innerHTML = slots
        $('body').appendChild(accordion)
    })
})
