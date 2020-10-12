import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-scroll-to-top',
  templateUrl: './btn-scroll-to-top.component.html',
  styleUrls: ['./btn-scroll-to-top.component.css']
})
export class BtnScrollToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // Wenn 100 Pixel gescrolled wurde
      $("#btn-scroll-to-top").fadeIn();
    } else {
      $("#btn-scroll-to-top").fadeOut();
    }
  });

  $("#btn-scroll-to-top").click(function () {
    // Klick auf den Button
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

}
