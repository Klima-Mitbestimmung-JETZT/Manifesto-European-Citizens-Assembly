import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css'],
})
export class DataprivacyComponent implements OnInit {
  technicalContacts: Contact[];
  responsible: Contact;
  text: {};
  introductoryParagraph: {};
  title: String;
  constructor() {}

  ngOnInit(): void {}
}
