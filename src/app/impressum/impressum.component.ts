import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from '../contentful.service';
import { Contact } from '../contact.interface';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css'],
})
export class ImpressumComponent implements OnInit {
  introductoryStatement: {};
  responsible: Contact;
  technicalResponsibles: Contact[];
  text: {};
  constructor(private contentfulService: ContentfulService) {
    this.contentfulService.getImpressum().then((impressum) => {
      console.log(impressum);
      impressum.fields.introductoryStatement
      ? (this.introductoryStatement = impressum.fields.introductoryStatement)
      : console.log(new Error('No introductoryStatement'))
      impressum.fields.responsible
        ? (this.responsible = impressum.fields.responsible)
        : console.log(new Error('No responsbile'));
      impressum.fields.technicalResponsibles
        ? (this.technicalResponsibles = impressum.fields.technicalResponsibles)
        : console.log(new Error('No technical contacts'));
      impressum.fields.text
        ? (this.text = impressum.fields.text)
        : console.log(new Error('No text'));
    });
  }

  ngOnInit(): void {}

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
