import { Component, Input, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from '../contentful.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: {};
  phases: String[] = ['Loading ...', 'Loading ...', 'Loading ...'];
  numberOfActivePhase: Number;
  faArrowRight = faArrowRight;
  statusNotice: {};
  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.getHeader().then((response) => {
      console.log(response);
      if (response.fields.title) this.title = response.fields.title;
      if (response.fields.phases) this.phases = response.fields.phases;
      if (response.fields.numberOfActivePhase)
        this.numberOfActivePhase = response.fields.numberOfActivePhase;
      if (response.fields.statusNotice)
        this.statusNotice = response.fields.statusNotice;
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
