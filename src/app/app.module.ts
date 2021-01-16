import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BtnScrollToTopComponent } from './btn-scroll-to-top/btn-scroll-to-top.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { SigneeComponent } from './signee/signee.component';
import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { SignLetterModalComponent } from './sign-letter-modal/sign-letter-modal.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

//Import FontAwesome Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import services
import { ContentfulService } from './contentful.service';
// Import Ng Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BtnScrollToTopComponent,
    ManifestoComponent,
    SigneeComponent,
    DataprivacyComponent,
    ImpressumComponent,
    SignLetterModalComponent,
    ContactModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent],
})
export class AppModule {}
