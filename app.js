import { $, $$ } from './helpers.js';
import { loadData } from './services/Menu.js';
import Store from './services/Store.js';
import Router, { loadRouter, routes } from './services/Router.js';

// Set up the app object
window.app = {}
app.store = Store
app.store = Router

window.addEventListener('DOMContentLoaded', () => {
    loadData()
    loadRouter(routes)
})
