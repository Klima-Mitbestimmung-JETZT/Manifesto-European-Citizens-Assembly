import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '5z21gx3h7sb2',
  accessToken: 'ecQ2l4UMTYi1MU3Szr2iNLep8Ak_pNp5i3Nxe1qU3VA',
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
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
