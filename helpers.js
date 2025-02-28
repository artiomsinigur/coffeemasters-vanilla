// Helpful functions and shortcuts
// Shortcuts for document queries
export const $ = (...args) => document.querySelector(...args);
export const $$ = (...args) => document.querySelectorAll(...args);

// Query selector inside elements
HTMLElement.prototype.$ = function (selector) {
    return this.querySelector(selector);
};
HTMLElement.prototype.$$ = function (selector) {
    return this.querySelectorAll(selector);
};

// Add/Remove event listener shorthand for elements
HTMLElement.prototype.on = function (event, handler, options) {
    this.addEventListener(event, handler, options);
};
HTMLElement.prototype.off = function (event, handler) {
    this.removeEventListener(event, handler);
};
