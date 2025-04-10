import { $, $$ } from '../helpers.js';
import '../customElements.js'

// pushing a new URL; the second argument is unused
// history.pushState(optionalState, null, '/new-url');

// to listen for changes to the URL within the same page navigation
// window.addEventListener('popstate', function(event) {
//     let url = this.location.href;
// });

const Router = {
    routes: [],
    init: (routes) => {
        Router.routes = routes

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

        // Find the route that matches the URL
        const matchRoute = Router.routes.find((r) => r.path.test(route));
        const pageElement = matchRoute ? matchRoute.component(route) : Router.notFountComponent();

        if (pageElement) {
            $('main').children.length && $('main').children[0].remove();
            $('main').appendChild(pageElement);
        }
    },
    notFountComponent: () => {
        const pageElement = document.createElement('h1');
        pageElement.textContent = '404';
        return pageElement
    }
}

export const routes = [
    {path: /^\/$/, component: () => {
        const pageElement = document.createElement('menu-page');
        return pageElement
    }},
    {path: /^\/order$/, component: () => {
        const pageElement = document.createElement('order-page');
        return pageElement
    }},
    {path: /^\/product-(\d+)$/, component: (route) => {
        const pageElement = document.createElement('details-page');
        pageElement.textContent = 'Product';
        pageElement.dataset.id = route.match(/\d+/)[0];
        return pageElement
    }},
]

export function loadRouter(routes) {
    Router.init(routes)
}

export default Router;
