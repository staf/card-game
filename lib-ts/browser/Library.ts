import LoadQueue = createjs.LoadQueue;

export default class Library {

    protected queue: LoadQueue;

    public constructor(completed: any) {
        this.queue = new LoadQueue();

        this.queue.on("complete", completed);

        this.queue.loadManifest([
            {id: "2", src: "/img/2.png", type: "image"},
            {id: "3", src: "/img/3.png", type: "image"},
            {id: "4", src: "/img/4.png", type: "image"},
            {id: "5", src: "/img/5.png", type: "image"},
            {id: "6", src: "/img/6.png", type: "image"},
            {id: "7", src: "/img/7.png", type: "image"},
            {id: "8", src: "/img/8.png", type: "image"},
            {id: "9", src: "/img/9.png", type: "image"},
            {id: "10", src: "/img/10.png", type: "image"},
            {id: "j", src: "/img/j.png", type: "image"},
            {id: "q", src: "/img/q.png", type: "image"},
            {id: "k", src: "/img/k.png", type: "image"},
            {id: "a", src: "/img/a.png", type: "image"},
            {id: "hearts", src: "/img/hearts.png", type: "image"},
            {id: "diamonds", src: "/img/diamonds.png", type: "image"},
            {id: "spades", src: "/img/spades.png", type: "image"},
            {id: "cloves", src: "/img/cloves.png", type: "image"},
        ]);
    }

    public get(id: string) {
        return this.queue.getResult(id);
    }
}