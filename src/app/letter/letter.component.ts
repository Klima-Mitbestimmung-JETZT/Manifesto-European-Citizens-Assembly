import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from '../contentful.service';
import { Person } from '../person.interface';
import { Organisation } from '../organisation.interface';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})

export class LetterComponent implements OnInit {
  title: {};
  header: {};
  mainText: {};
  signingPersons: Person[]
  signingOrganisations: Organisation[] 
  textBlocksHowManyHaveSigned: String[]
  
  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit(): void {
    this.contentfulService.getManifesto().then((letter) => {
      if (letter.fields.title) this.title = letter.fields.title;
      if(letter.fields.header) this.header = letter.fields.header;
      if (letter.fields.mainText) this.mainText = letter.fields.mainText;
      if (letter.fields.signingPersons) this.signingPersons = letter.fields.signingPersons;
      if (letter.fields.signingOrganisations) this.signingOrganisations = letter.fields.signingOrganisations;
      if (letter.fields.textBlocksHowManyHaveSigned) this.textBlocksHowManyHaveSigned = letter.fields.textBlocksHowManyHaveSigned;
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
