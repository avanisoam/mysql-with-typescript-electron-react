// import { remote } from 'electron';
import { News, Appnews } from '@src/types';

export class HttpClient {
  constructor() {}

  // private requestAsPromise(url: string): Promise<string> {
  //   const request = remote.net.request(url)
  //   request.on('response', (response) => {
  //     console.log(`STATUS: ${response.statusCode}`)
  //     console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
  //     response.on('data', (chunk) => {
  //       console.log(`BODY: ${chunk}`)
  //     })
  //     response.on('end', () => {
  //       console.log('No more data in response.')
  //     })
  //   });

  //   request.end();
  

  //   return new Promise<string>((resolve, reject) => {
  //     const request = remote.net.request(url);

  //     request.on('response', (response: Electron.IncomingMessage) => {
  //       let data = '';

  //       response.on('data', (buffer: Buffer) => {
  //         data = buffer.toString();
  //         resolve(data); //Should not be necessary ?
  //       });

  //       response.on('end', () => {
  //         resolve(data);
  //       });

  //       response.on('error', () => reject(new Error('Http call failed')));
  //     });

  //     request.on('error', (error: Error) => {
  //       reject(error);
  //     });

  //     request.end();
  //   });
  // }

  public async getNews(): Promise<Appnews> {
    
    // const newsJson = await this.requestAsPromise(
    //   'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=3&format=json'
    // );
    const url = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=570&count=3&format=json';
    const response = await window.fetch(url);
    const json = await response.text();
    let news: News = JSON.parse(json);
    return news.appnews;
  }
}
