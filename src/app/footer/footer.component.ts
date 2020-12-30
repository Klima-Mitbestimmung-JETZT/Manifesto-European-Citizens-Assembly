import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  bottomNotice = `We do not support the use of Internet Explorer (IE) and ask for their understanding when using it that then undesirable effects can occur. We recommend that you always use a different browser. This will allow them to use the Internet more pleasant and safer.`;
  constructor() {}

  ngOnInit(): void {}
}
