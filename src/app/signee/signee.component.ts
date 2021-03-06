import { Component, Input, OnInit } from '@angular/core';
import { Logo } from '../logo.interface';

@Component({
  selector: 'app-signee',
  templateUrl: './signee.component.html',
  styleUrls: ['./signee.component.css'],
})
export class SigneeComponent implements OnInit {
  @Input() listOfSigningNames: string;
  @Input() name: string;
  @Input() website: string;
  @Input() logo: Logo;
  constructor() {}

  ngOnInit(): void {}
}
