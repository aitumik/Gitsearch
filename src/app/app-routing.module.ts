import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"index", component:ProfileComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:NotfoundComponent},
  {path:"", redirectTo:"index", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
