import {Color, Size, Suit} from "./Types";
import Library from "./Library";
import Container = createjs.Container;
import Shape = createjs.Shape;
import Bitmap = createjs.Bitmap;

export default class Card {

    /**
     * Store the value of the card.
     */
    private _value: number;

    /**
     * Store the suit of the card.
     */
    private _suit: Suit;

    /**
     * Media library
     */
    protected library: Library;

    /**
     * Public getter for the value of the card.
     */
    public get value(): number {
        return this._value;
    }

    /**
     * Public getter for the suit.
     */
    public get suit(): Suit {
        return this._suit;
    }

    /**
     * Getter to read what color this card is.
     */
    public get color(): Color {
        switch (this._suit) {
            case Suit.Hearts:
            case Suit.Diamonds:
                return Color.Red;
            case Suit.Spades:
            case Suit.Cloves:
                return Color.Black;
            default:
                return Color.None;
        }
    }

    /**
     * Setup the card.
     *
     * @param {Library} library
     * @param {Suit} suit
     * @param {number} value
     */
    constructor(library: Library, suit: Suit, value: number) {
        this.library = library;
        this._suit = suit;
        this._value = value;
    }

    /**
     * Build the visible object used for this card.
     *
     * @param   {Size} size
     * @returns {createjs.Container}
     */
    public buildForSize(size: Size): Container {
        let container = new Container();

        let shape = new Shape();
        shape.graphics.beginStroke("#000");
        shape.graphics.setStrokeStyle(5);
        shape.graphics.beginFill("#FFF");
        shape.graphics.drawRoundRect(0, 0, size.width, size.height, 4);

        container.addChild(shape);

        let suit = new Bitmap(this.library.get(this._suit));
        suit.x = 120;
        suit.y = 10;
        container.addChild(suit);

        let value = new Bitmap(this.library.get(this._value.toString()));
        value.x = 60;
        value.y = 10;
        container.addChild(value);

        container.x = 10;
        container.y = 10;

        return container;
    }
}
