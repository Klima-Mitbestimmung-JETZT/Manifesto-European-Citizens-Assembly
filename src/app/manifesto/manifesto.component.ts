import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from '../contentful.service';
import { Person } from '../person.interface';
import { Organisation } from '../organisation.interface';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.css'],
})

export class ManifestoComponent implements OnInit {
  title: {};
  header: {};
  mainText: {};
  signingPersons: Person[]
  signingOrganisations: Organisation[] 
  textBlocksHowManyHaveSigned: String[]
  
  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentfulService.getManifesto().then((manifesto) => {
      if (manifesto.fields.title) this.title = manifesto.fields.title;
      if(manifesto.fields.header) this.header = manifesto.fields.header;
      if (manifesto.fields.mainText) this.mainText = manifesto.fields.mainText;
      if (manifesto.fields.signingPersons) this.signingPersons = manifesto.fields.signingPersons;
      if (manifesto.fields.signingOrganisations) this.signingOrganisations = manifesto.fields.signingOrganisations;
      if (manifesto.fields.textBlocksHowManyHaveSigned) this.textBlocksHowManyHaveSigned = manifesto.fields.textBlocksHowManyHaveSigned;
    });
  }

  // https://stackoverflow.com/questions/57893367/display-contentful-richtext-in-angular'
  _returnHtmlFromRichText(richText) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Loading ...</p>';
    }
    return documentToHtmlString(richText);
  }
}
