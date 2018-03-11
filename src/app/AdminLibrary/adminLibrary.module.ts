import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { FormsModule } from '@angular/forms';

import { CommonService } from './adminLibrary.service';




@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // FormsModule,
    //MatButtonModule, MatCheckboxModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
    HttpModule,
    MatChipsModule,
    NgbModule.forRoot(),
  ],
  providers: [CommonService],
  bootstrap: [],
  exports: [CommonModule,
      MatChipsModule
    , RouterModule],

})
export class AdminLibraryModule {
  // constructor(parentModule: AdminLibraryModule);

}
