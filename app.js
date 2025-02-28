import { $, $$ } from './helpers.js';

window.addEventListener('DOMContentLoaded', (event) => {
    // const nav = document.querySelector('nav');
})

// Creating a Custom Event
document.addEventListener('customevent', (event) => {
    console.log(`Hi: ${event.detail.name}`)
})

const customEvent = new CustomEvent('customevent', {
    detail: { name: 'Dispatch custom event on load' }
})
document.dispatchEvent(customEvent)

//  Using Custom Events in DOM Elements
const logo = $('header h1 img');

logo.addEventListener('customclick', (event) => {
    console.log(event.detail.name)
})

logo.addEventListener('click', (event) => {
    const customClickElement = new CustomEvent('customclick', {
        detail: { name: 'Dispatch custom event on click' }
    })
    logo.dispatchEvent(customClickElement)
})

// Use shorthand method to query elements and add event listeners
$('nav a').on('click', (event) => {
    event.preventDefault();
    console.log('Clicked on a link')
})
