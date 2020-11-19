import { Component, Input, OnInit } from '@angular/core';
import { Logo } from '../logo.interface';

@Component({
  selector: 'app-signee',
  templateUrl: './signee.component.html',
  styleUrls: ['./signee.component.css'],
})
export class SigneeComponent implements OnInit {
  @Input() listOfSigningNames: String;
  @Input() name: String;
  @Input() website: String;
  @Input() logo: Logo;
  constructor() {}

  ngOnInit(): void {}
}
