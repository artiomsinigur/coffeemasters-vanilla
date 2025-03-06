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

        // Set Event Handler for back/forward buttons
        // Set addToHistory to false to prevent adding a new history entry
        window.addEventListener('popstate', (event) => {
            Router.go(event.state.route, false);
        });

        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log('Going to ', route);

        // Add the route to the history stack
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
            default:
                if (route.startsWith('/product-')) {
                    pageElement = document.createElement('h1');
                    pageElement.textContent = 'Product';
                    const paramId = route.substring(route.lastIndexOf('-') + 1);
                    pageElement.dataset.id = paramId
                } else {
                    pageElement = document.createElement('h1');
                    pageElement.textContent = '404';
                }
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
