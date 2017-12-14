import Game from "./browser/Game";

/**
 * Get a new Game instance
 *
 * @type {Game}
 */
const game = new Game();

/**
 * Listen for the DOM content loading to be completed before we boot the game.
 * Should happen immediately.
 */
document.addEventListener("DOMContentLoaded", function (e) {
    game.init();
});

/**
 * Resizing the window will need redraw of the game to fit the new size and/or aspect ratio.
 * We wait for a quarter of a second before actually firing the resize logic however.
 */
let resizeTimeout: any;
window.addEventListener("resize", function (e) {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
        game.handleResize();
    }, 250);
});

/**
 * The following code sets the game instance as a property of the window object.
 * This allows us to get intellisense when reaching for the game instance. Exposing
 * the game instance also allows us to call helpful methods through the browser console.
 */

declare global {
    interface Window {
        Game: Game;
    }
}
window.Game = game;