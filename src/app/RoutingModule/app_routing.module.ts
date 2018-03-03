import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleRouteComponent } from '../app.simplerouter.component';


const routes: Routes = [
    {
        path: 'profile',
        component: SimpleRouteComponent,
        outlet: 'appContainer',
        // children: [
        //     {
        //         path: 'selfprofilep',
        //         loadChildren: 'app/Profile/app.profile.module#ProfileModule',
        //     },
        // ],
        // canDeactivate: ['canDeactivateTeam']
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: "full",
        //outlet: 'appContainer',
        //component: SimpleRouteComponent,
        //outlet: 'appContainer'
    },
    // {
    //     path: '**',
    //     component: SimpleRouteComponent,
    //     outlet: 'appContainer'
    // },
    {
        path: 'lazy',
        loadChildren: '../Profile/app.profile.module#ProfileModule',
        //'app/Profile/app.profile.module#ProfileModule',
        // children:[
        //     {
        //         path: 'selfprofilep',
        //         loadChildren: 'app/Profile/app.profile.module#ProfileModule',
        //     },
        // ],
        //outlet: 'appContainer'
    }
]

@NgModule({
    declarations: [
        SimpleRouteComponent
    ],
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true }),// { enableTracing: true } <-- debugging purposes only  
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: []
})
export class AppRoutingModule {



}
