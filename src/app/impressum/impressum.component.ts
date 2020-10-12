import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css'],
})
export class ImpressumComponent implements OnInit {
   technicalContacts: Contact[];
   responsible: Contact;
   text: {};
  constructor() {}

  ngOnInit(): void {}
}
