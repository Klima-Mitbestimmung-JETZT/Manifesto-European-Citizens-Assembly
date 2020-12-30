import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Contact } from '../contact.interface';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css'],
})
export class DataprivacyComponent implements OnInit {
  introductoryStatement: {};
  responsible: Contact;
  text: {};
  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.getDataprivacy().then((dataprivacy) => {
      console.log(dataprivacy);
      if (dataprivacy.fields.responsible)
        this.responsible = dataprivacy.fields.responsible;
      if (dataprivacy.fields.text) this.text = dataprivacy.fields.text;
      if (dataprivacy.fields.introductoryStatement)
        this.introductoryStatement = dataprivacy.fields.introductoryStatement;
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
