import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  bottomNotice = `Wir unterstützen keine Nutzung des Internet Explorers. Wir empfehlen
  Ihnen/Dir, grundsätzlich einen anderen Browser zu nutzen. Damit können
  Sie/kannst du das Internet angenehmer und sicherer nutzen.`;
  constructor() {}

  ngOnInit(): void {}
}
