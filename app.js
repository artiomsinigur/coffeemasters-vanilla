import { $, $$ } from './helpers.js';
import API from './services/API.js';
import Store from './services/Store.js';
import { loadData } from './services/Menu.js';

window.app = {}
app.store = Store

window.addEventListener('DOMContentLoaded', (event) => {
    loadData()
})
