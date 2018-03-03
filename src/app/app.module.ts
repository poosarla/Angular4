import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLibraryModule } from './AdminLibrary/adminLibrary.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';


import 'hammerjs';


import * as $ from 'jquery';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { ModalModule } from 'ngx-bootstrap/modal';

//import { AdminLibraryModule } from './AdminLibrary/adminLibrary.module';
import { AppRoutingModule } from './RoutingModule/app_routing.module';
//import { ProfileModule } from './Profile/app.profile.module';

import { ToolBarComponent } from './app.toolbar.component';
import { AppComponent } from './app.component';

//import { SimpleRouteComponent } from './app.simplerouter.component';

//import {SideNavBarComponent} from './app.sidenavbar.component';
// const routes: Routes = [
//   {
//       path: 'profile',
//       component: SimpleRouteComponent,
//       outlet: 'appContainer'
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    //SimpleRouteComponent
    //SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AdminLibraryModule,    
    FormsModule,
    //CommonModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
    // AdminLibraryModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //  RouterModule.forRoot(routes,{ enableTracing: true } ) ,// { enableTracing: true } <-- debugging purposes only
    // MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
    // ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
