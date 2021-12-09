import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ViewofertComponent } from './viewofert/viewofert.component';
import { CreateofertComponent } from './createofert/createofert.component';
import { PublishofertComponent } from './publishofert/publishofert.component';
import { PreviewofertComponent } from './previewofert/previewofert.component';
import { DateUserComponent } from './date-user/date-user.component';
import { LisstRequiestUComponent } from './lisst-requiest-u/lisst-requiest-u.component';
import { DateAsesorComponent } from './date-asesor/date-asesor.component';
import { DateAdmonComponent } from './date-admon/date-admon.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NewCityComponent } from './new-city/new-city.component';
import { ListRequestAsesorComponent } from './list-request-asesor/list-request-asesor.component';
import { StatsComponent } from './stats/stats.component';
import { DownloadComponent } from './download/download.component';
import { AdmonComponent } from './admon/admon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuRolesDirective } from './menu-roles.directive';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LoginComponent,
    SearchComponent,
    ViewofertComponent,
    CreateofertComponent,
    PublishofertComponent,
    PreviewofertComponent,
    DateUserComponent,
    LisstRequiestUComponent,
    DateAsesorComponent,
    DateAdmonComponent,
    NewCategoryComponent,
    NewCityComponent,
    ListRequestAsesorComponent,
    StatsComponent,
    DownloadComponent,
    AdmonComponent,
    MenuRolesDirective,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'search', component: SearchComponent },
      { path: 'view', component: ViewofertComponent },
      { path: 'create', component: CreateofertComponent},
      { path: 'finishpublish', component: PublishofertComponent },
      { path: 'previewpublish', component: PreviewofertComponent },
      { path: 'dateUser', component: DateUserComponent },
      { path: 'request', component: LisstRequiestUComponent },
      { path: 'dateAssesor', component: DateAsesorComponent },
      { path: 'dateAdmon', component: DateAdmonComponent },
      { path: 'newcategory', component: NewCategoryComponent },
      { path: 'newcity', component: NewCityComponent },
      { path: 'requestasesor', component: ListRequestAsesorComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'admon', component: AdmonComponent },
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
