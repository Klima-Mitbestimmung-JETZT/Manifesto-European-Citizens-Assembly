import { Component, Input, OnInit } from '@angular/core';
import { Signee } from '../signee.interface';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})
export class LetterComponent implements OnInit {
   contactNotice: {};
   text: {};
   addressant: String;
   title: String;
   signees: Signee[];
  
  constructor() {}

  ngOnInit(): void {}
}
