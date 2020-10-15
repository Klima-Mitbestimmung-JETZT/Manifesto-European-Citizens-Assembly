import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BtnScrollToTopComponent } from './btn-scroll-to-top/btn-scroll-to-top.component';
import { LetterComponent } from './letter/letter.component';
import { SigneeComponent } from './signee/signee.component';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { FormsModule } from '@angular/forms';

// import services
import { ContentfulService } from './contentful.service';
import { SignLetterModalComponent } from './sign-letter-modal/sign-letter-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BtnScrollToTopComponent,
    LetterComponent,
    SigneeComponent,
    DataprivacyComponent,
    ImpressumComponent,
    SignLetterModalComponent,
    ContactModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
