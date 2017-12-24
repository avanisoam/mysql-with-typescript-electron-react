import * as React from 'react';
import { HttpClient } from '../api/httpclient';
import { Appnews, Newsitem } from '../types/';

export interface ComponentProperties {}

export interface ComponentState {
  news?: Appnews;
}

class News extends React.Component<ComponentProperties, ComponentState> {
  private httpClient: HttpClient;

  constructor(props: ComponentProperties) {
    super(props);
    this.httpClient = new HttpClient();
    this.state = {};
  }

  componentDidMount() {
    this.httpClient.getNews().then(
      (result: Appnews) => {
        this.setState({ news: result });
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }

  componentWillUnmount() {}

  private ListItem(item: Newsitem) {
    return <li key={item.gid}>{item.title}</li>;
  }

  getNews(news: Appnews): JSX.Element {
    const listItems = news.newsitems.map(x => this.ListItem(x));
    return <ul>{listItems}</ul>;
  }

  // getNewsContent(news: Appnews): JSX.Element {
  //   return (
  //     <div
  //       className="baseText"
  //       dangerouslySetInnerHTML={{ __html: news.newsitems[0].contents }}
  //     />
  //   );
  // }

  render() {
    return (
      <div className="baseText">
        <div className="baseHeader">Dota 2 news </div>
        {!this.state.news ? 'nothing' : this.getNews(this.state.news)}
      </div>
    );
  }
}

export default News;
