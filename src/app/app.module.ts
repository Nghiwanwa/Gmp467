import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoreComponent } from './components/store/store.component';
import { MusicComponent } from './components/music/music.component';
import { VideoComponent } from './components/video/video.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialComponent } from './components/social/social.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdssectionComponent } from './components/adssection/adssection.component';
import { PrivancyComponent } from './components/privancy/privancy.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SupportComponent } from './components/support/support.component';
import { BookingsuccesfullyComponent } from './components/bookingsuccesfully/bookingsuccesfully.component';
import { SingleProductsComponent } from './components/single-products/single-products.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { CatergoriesComponent } from './components/catergories/catergories.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { IntroComponent } from './components/intro/intro.component';
import { PhoneveritificationComponent } from './components/phoneveritification/phoneveritification.component';
import { OtpconfirmationComponent } from './components/otpconfirmation/otpconfirmation.component';
import { PasswordchangeComponent } from './components/passwordchange/passwordchange.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { NoticationdetailsComponent } from './components/noticationdetails/noticationdetails.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { Ads1Component } from './ads1/ads1.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { ResetsuccessfulComponent } from './resetsuccessful/resetsuccessful.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginPageComponent,
    UserProfileComponent,
    AboutUsComponent,
    StoreComponent,
    MusicComponent,
    VideoComponent,
    GalleryComponent,
    NewsComponent,
    NotificationsComponent,
    ContactComponent,
    SocialComponent,
    BookingComponent,
    AdssectionComponent,
    PrivancyComponent,
    UserprofileComponent,
    SettingsComponent,
    SupportComponent,
    BookingsuccesfullyComponent,
    SingleProductsComponent,
    SingleNewsComponent,
    CatergoriesComponent,
    EditProfileComponent,
    IntroComponent,
    PhoneveritificationComponent,
    OtpconfirmationComponent,
    PasswordchangeComponent,
    PasswordresetComponent,
    MyorderComponent,
    NoticationdetailsComponent,
    FooterComponent,
    MenuComponent,
    Ads1Component,
    HomebannerComponent,
    ResetsuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
