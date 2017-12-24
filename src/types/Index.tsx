export interface Newsitem {
  gid: string;
  title: string;
  url: string;
  is_external_url: boolean;
  author: string;
  contents: string;
  feedlabel: string;
  date: number;
  feedname: string;
  feed_type: number;
  appid: number;
}

export interface Appnews {
  appid: number;
  newsitems: Newsitem[];
  count: number;
}

export interface News {
  appnews: Appnews;
}