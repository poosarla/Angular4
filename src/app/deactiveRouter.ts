// import { Injectable } from '@angular/core';
// import { CanDeactivate } from '@angular/router';
// import { AppComponent } from './app.component';
// import { Observable } from 'rxjs/Observable';
// import {ActivatedRouteSnapshot} from '@angular/router';
// import { RouterStateSnapshot } from '@angular/router';
// import { Route } from '@angular/router';

// class UserToken {}
// class Permissions {
//   canDeactivate(user: UserToken, id: string): boolean {
//     return true;
//   }
// }

// @Injectable()
// class CanDeactivateTeam implements CanDeactivate<AppComponent> {
//   constructor(private permissions: Permissions, private currentUser: UserToken,private route:Route) {}

//   canDeactivate(
//     component: AppComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState: RouterStateSnapshot
//   ): Observable<boolean>|Promise<boolean>|boolean {
//     return this.permissions.canDeactivate(this.currentUser, route.params.id);
//   }
// }