import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './train/train.component';
import { ShareComponent } from './share/share.component';
import { ConsultComponent } from './consult/consult.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:  '', component:   HomeComponent , pathMatch:  'full' },
  { path:  'share', component:  ShareComponent , pathMatch:  'full' },
  { path:  'train', component:  TrainComponent  , pathMatch:  'full' },
  { path:  'consult', component:  ConsultComponent  , pathMatch:  'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
