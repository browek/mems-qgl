export interface Post {
    id: String;
    title: String;
    image: {
        url: String;
        alt: String;
    }
    tags: Array<String>;
    _firstPublishedAt: Date;
}
