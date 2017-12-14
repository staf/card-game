import Canvas from "./Canvas";
import Library from "./Library";

export default class Game {

    protected canvas: Canvas;

    protected library: Library;

    /**
     * Bootstrap app dependencies and components used for the game.
     * This method should only be called once.
     */
    public init(): void {
        this.library = new Library((e: Object) => {
            this.setup();
        });
    }

    protected setup(): void {
        this.canvas = new Canvas(this.library);
        console.log(this);
    }

    /**
     * Handle resizing the window viewport.
     */
    public handleResize(): void {
        this.canvas.adjustForScreenSize();
    }

}
