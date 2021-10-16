import { LoginComponent } from './components/login/login.component';
import { RemoveComponent } from './components/remove/remove.component';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './components/find/find.component';
import { RecommendComponent } from './components/recommend/recommend.component';

const routes: Routes = [

  // all of these components will be rendered at url localhost:4200/x -> wherever the <routeroutlet> is placed
  { path: '', component: LoginComponent },
  { path: 'login',component: LoginComponent},
  {path: 'main', component:MainComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'recommend', component: RecommendComponent},
  { path: '**', component: LoginComponent} // this is a Wild Card Route to handle HAS TO BE LAST

];

// A module is a container for diff parts of your app like controllers, services, directives
// The routes, and other properties will be auto configured by npm 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
