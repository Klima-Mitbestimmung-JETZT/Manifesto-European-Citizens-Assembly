import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private contentfulClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  getLetter(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '2aDDbb4AjEQdCo0IW7AnLm', include: 1 })
      .then((res) => res.items[0]);
  }

  getImpressum(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '1RjJ8ucJJIekoeZ6Tz1ZLH', include: 1 })
      .then((res) => res.items[0]);
  }

  getDataprivacy(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '4rC21AGeBowVcfQKLnwBPk', include: 1 })
      .then((res) => res.items[0]);
  }
}
