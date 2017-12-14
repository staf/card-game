import Stage = createjs.Stage;
import {Size, Suit} from "./Types";
import Card from "./Card";
import Library from "./Library";

export default class Canvas {

    protected library: Library;

    /**
     * Cached size of the viewport to base all internal size calculations of.
     */
    protected size: Size = {
        height: window.innerHeight,
        width: window.innerWidth
    };

    /**
     * HTML canvas element we are rendering the game to.
     */
    protected canvas: HTMLCanvasElement;

    /**
     * The easel.js stage we mount all the content to.
     */
    protected stage: Stage;

    /**
     *
     */
    public constructor(library: Library) {
        this.library = library;
        this.canvas = <HTMLCanvasElement> document.getElementById("game");
        this.stage = new Stage(this.canvas);
        this.adjustForScreenSize();

        let card = new Card(library, Suit.Cloves, 2);
        this.stage.addChild(card.buildForSize({width: 200, height: 300}));
        this.stage.update();
    }

    /**
     * Update the screen dimensions of the viewport in our instance as well as the
     * canvas which in turn means we need to set the dimensions of all content within.
     */
    public adjustForScreenSize() {
        this.size = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
    }

}
