import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select'
import { MatOptionModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';



@NgModule({
  declarations: [
    AppComponent, HomeComponent , NavigationComponent, LoginComponent,RegisterComponent, ShowDetailsComponent
  ],
  imports: [ HttpClientModule,
    BrowserModule,ReactiveFormsModule ,RouterModule, AppRoutingModule, BrowserAnimationsModule, 
    MatCardModule,MatListModule, MatInputModule, MatIconModule,
    MatButtonModule , MatToolbarModule, MatOptionModule, MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
