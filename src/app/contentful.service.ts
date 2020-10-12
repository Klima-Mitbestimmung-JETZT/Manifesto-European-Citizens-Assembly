import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  getLetter(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries({
        'sys.id': '2aDDbb4AjEQdCo0IW7AnLm',
        order: 'sys.createdAt',
        include: 1,
      })
      .then((res) => res.items);
  }
}
