export class Quotes {
    constructor(
        public text: string,
        public author: string,
        public poster: string,
        public posttime: Date,
        public upvotes: number,
        public downvotes: number
      ) { }
}
