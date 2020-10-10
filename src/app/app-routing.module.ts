import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdssectionComponent } from './components/adssection/adssection.component';
import { BookingComponent } from './components/booking/booking.component';
import { CatergoriesComponent } from './components/catergories/catergories.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MusicComponent } from './components/music/music.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { NewsComponent } from './components/news/news.component';
import { NoticationdetailsComponent } from './components/noticationdetails/noticationdetails.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { OtpconfirmationComponent } from './components/otpconfirmation/otpconfirmation.component';
import { PasswordchangeComponent } from './components/passwordchange/passwordchange.component';
import { PasswordresetComponent } from './components/passwordreset/passwordreset.component';
import { PhoneveritificationComponent } from './components/phoneveritification/phoneveritification.component';
import { PrivancyComponent } from './components/privancy/privancy.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { SingleProductsComponent } from './components/single-products/single-products.component';
import { SocialComponent } from './components/social/social.component';
import { StoreComponent } from './components/store/store.component';
import { SupportComponent } from './components/support/support.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
  {
    path:"store",
    component:StoreComponent 
  },

   {
     path:"about-us",
    component:AboutUsComponent
   },
    {
    path:"ads",
    component:AdssectionComponent
  },
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"catergories",
    component:CatergoriesComponent
  },

  {
    path:"privacy",
    component:PrivancyComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"edit-profile",
    component:EditProfileComponent
  },

  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"intro",
    component:IntroComponent
  },

  {
    path:"login",
    component:LoginPageComponent
  },
  {
    path:"music",
    component:MusicComponent
  },
  {
    path:"order",
    component:MyorderComponent
  },

  {
    path:"news",
    component:NewsComponent
  },
  {
    path:"notification-details",
    component:NoticationdetailsComponent
  },
  {
    path:"notifications",
    component:NotificationsComponent
  },

  {
    path:"otpconfirm",
    component:OtpconfirmationComponent
  },
  {
    path:"change-password",
    component:PasswordchangeComponent
  },
  {
    path:"password-reset",
    component:PasswordresetComponent
  },

  {
    path:"phone-vertification",
    component:PhoneveritificationComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"settings",
    component:SettingsComponent
  },

  {
    path:"social",
    component:SocialComponent
  },
  {
    path:"support",
    component:SupportComponent
  },
  {
    path:"user-profile",
    component:UserprofileComponent
  },

  {
    path:"video",
    component:VideoComponent
  },
  
  {
    path: '',
    redirectTo:'/password-reset',
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
