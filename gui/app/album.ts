export class Album {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public album_type: string,
    public available_markets: Object,
    public external_urls: Object,
    public href: string,
    public images: Object,
    public uri: string
  ) {}
}
