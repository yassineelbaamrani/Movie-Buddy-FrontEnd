import { RemoveComponent } from './components/remove/remove.component';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './components/find/find.component';

const routes: Routes = [

  // all of these components will be rendered at url localhost:4200/x -> wherever the <routeroutlet> is placed
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },   // the path specifies http:/localhost:4200/main
  { path: 'register', component: RegisterComponent},
  { path: 'all', component: AllComponent},
  { path: 'find', component: FindComponent},
  { path: 'remove', component: RemoveComponent},
  { path: '**', component: MainComponent} // this is a Wild Card Route to handle HAS TO BE LAST

];

// A module is a container for diff parts of your app like controllers, services, directives
// The routes, and other properties will be auto configured by npm 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
