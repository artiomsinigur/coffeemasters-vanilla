import { $, $$ } from '../helpers.js';

// pushing a new URL; the second argument is unused
// history.pushState(optionalState, null, '/new-url');

// to listen for changes to the URL within the same page navigation
// window.addEventListener('popstate', function(event) {
//     let url = this.location.href;
// });

const Router = {
    init: () => {
        $$('a.navlink').forEach((link) => {
            link.on('click', (event) => {
                event.preventDefault();
                // const url = link.href; // http://127.0.0.1:5500/
                // const url = link.getAttribute('href'); // /about
                const url = event.target.getAttribute('href');
                Router.go(url);
            });
        })

        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log('Going to ', route);

        if (addToHistory) {
            history.pushState({ route }, null, route);
        }

        let pageElement = null
        
        switch (route) {
            case '/':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Home';
                break;
            case '/order':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Order';
                break;
        }

        if (pageElement) {
            $('main').children.length && $('main').children[0].remove();
            $('main').appendChild(pageElement);
        }
    }
}

export function loadRouter() {
    Router.init()
}

export default Router;
