const STORE = {
    menu: null,
    cart: [],
}

const storeProxy = new Proxy(STORE, {
    // get: (target, property) => {
    //     if (property === 'menu') {
    //         return target[property].map((product) => `${product.name} - $${product.price}`)
    //     } else {
    //         return target[property]
    //     }
    // },
    set: (target, property, value) => {
        target[property] = value
        if (property === 'menu') {
            window.dispatchEvent(new CustomEvent('appmenuchange'))
        }
        if (property === 'cart') {
            window.dispatchEvent(new CustomEvent('appcartchange'))
        }
        return true
    },
})

function initStore() {
    app.store = storeProxy
}

const ACCORDION = [
    {
        title: 'About Us',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: 'Know more about us'
    },
    {
        title: 'Contact Us',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: 'More details about us'
    },
    {
        title: 'Privacy Policy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: 'Read our privacy policy'
    }
]

export default storeProxy;
export { ACCORDION, initStore }