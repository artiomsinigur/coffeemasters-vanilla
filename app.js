window.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.querySelector('nav');
})

// Creating a Custom Event
const customEvent = new CustomEvent('customevent', {
    detail: {
        name: 'John Doe'
    }
})

document.addEventListener('customevent', (event) => {
    console.log(`Hi: ${event.detail.name}`)
})
document.dispatchEvent(customEvent)

//  Using Custom Events in DOM Elements
const button = document.createElement('button')
button.textContent = 'Custom Event'
document.body.appendChild(button)

button.addEventListener('click', (event) => {
    const customClickElement = new CustomEvent('customclick', {
        detail: {
            name: 'Click on Custom Event'
        }
    })
    button.dispatchEvent(customClickElement)
})
button.addEventListener('customclick', (event) => {
    console.log(event.detail.name)
})