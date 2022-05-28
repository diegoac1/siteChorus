import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/shared/home/home.component';
import { RouterModule } from '@angular/router';
import { ContatoComponent } from './components/shared/contato/contato.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card'; 
import { MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule
  //   RouterModule.forRoot([
      
  //     {
  //       path: '', redirectTo: 'evento', pathMatch: 'full'
  //     }
  // ],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
