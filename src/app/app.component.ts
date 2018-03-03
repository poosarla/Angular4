import { Component, OnInit } from '@angular/core';
//import { CommonService } from './AdminLibrary/adminLibrary.service'
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent implements OnInit {



  title = 'app';
  testngModel = "hai";

  constructor(public appService: AppService, private router: Router, private activeroute: ActivatedRoute) { };

  ngOnInit(): any {

    let postData = {};

    this.appService.getTestedHttpURLData(postData).subscribe((serviceRespone: any) => {

      console.log(serviceRespone);

    });

    // this.router.navigate([{ outlets: { appContainer: ['lazy/selfprofile'] } }]);// lazy/profile //,{relativeTo:this.activeroute}
  }

  loadlazybindingModule(): any {

    this.router.navigate(['lazy',{ outlets: { appContainer: ['selfprofile'] } }]);// lazy/profile //,{relativeTo:this.activeroute}
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
      return true;
    } else {
      return false;
    }
  }

}
