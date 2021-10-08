import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // built in library where we get ngModel directive from
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './components/all/all.component';
import { FindComponent } from './components/find/find.component';
import { RemoveComponent } from './components/remove/remove.component';

// ANgular is MODULAR! organizes views and functionality in different files/directorys
// when we ng server the app, the webpack traverses our application an identifies dependencies
// and the components that can be rendered

@NgModule({
  declarations: [ // ng g c main -> automatically puts it in here
    AppComponent,
    NavComponent,
    MainComponent,
    RegisterComponent,
    AllComponent,
    FindComponent,
    RemoveComponent
  ],
  imports: [ // defines libraries that are accessible to component within our app
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // [(ngModel)] 2 way property binding
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // this will load automatically upon startup
})
export class AppModule { }
