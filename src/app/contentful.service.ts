import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private contentfulClient = createClient({
    space: environment.contentful.space,
    environment: environment.contentful.environment,
    accessToken: environment.contentful.accessToken,
  });

  constructor() { }

  getManifesto(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '4X61CaEUqU8ihVGbOja0VF', include: 2 })
      .then((res) => res.items[0]);
  }

  getImpressum(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '5eQPIj8C7NmNtCQ2Mzp2le', include: 1 })
      .then((res) => res.items[0]);
  }

  getDataprivacy(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '5QlXvyztZQP4F7IAaMoZPS', include: 1 })
      .then((res) => res.items[0]);
  }

  getHeader(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '3qfXktdK9Rt4qglKGzRuRh', include: 1 })
      .then((res) => res.items[0]);
  }

  getFooter(): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntries({ 'sys.id': '4URX5mVmIUCUBsJ6GhtEVe', include: 1 })
      .then((res) => res.items[0]);
  }
}
