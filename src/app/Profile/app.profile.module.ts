//import { BrowserModule } from '@angular/platform-browser';
import { AdminLibraryModule } from '../AdminLibrary/adminLibrary.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelfProfileComponent } from './app.selfprofile.component';
import { AppLanguagesDetailComponent } from './app.languagesdetails.component';

const routes: Routes = [
  // {
  //   path: '',
  //   //  component: SelfProfileComponent,
  //   redirectTo: 'selfprofile',
  //   pathMatch: 'full',
  //   outlet: 'appContainer'
  // },
  {
    path: 'selfprofile',
    component: SelfProfileComponent,
    outlet: 'appContainer'
  }
]

@NgModule({
  declarations: [
    SelfProfileComponent,
    AppLanguagesDetailComponent
  ],
  imports: [
    AdminLibraryModule,
    //BrowserAnimationsModule,
    //BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule.forChild(routes),// { enableTracing: true } <-- debugging purposes only  

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class ProfileModule {


}
