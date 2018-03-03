import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppLanguagesDetailComponent } from './app.languagesdetails.component';
@Component({
  selector: 'app-profile-self-details',
  templateUrl: './app.selfprofile.html',
  styleUrls: ['./app.selfprofile.css'],
  providers: [],
  //entryComponents: [AppLanguagesDetailComponent]
})
export class SelfProfileComponent implements OnInit {

  showSelfProfile: boolean = true;
  mydualVariable: string = "first change string"

  //changeLog: string[] = [];

  constructor(private router: Router, private activeroute: ActivatedRoute) { };

  @ViewChild('languagedetail1') ProfileLangchild: AppLanguagesDetailComponent;
  @ViewChild('languagedetail2') ProfileLangchildTwo: AppLanguagesDetailComponent;

  progLanguagesList: any = [
    { Name: "AngularJS", id: 1 },
    { Name: "Angular", id: 2 },
    { Name: "C#", id: 3 }
  ];

  languageinputcomp1: string = "Child Component1";
  languageinputcomp2: string = "Child Component2";

  ngOnInit(): any {

  }



  hideProfileCard = function () {

    this.showSelfProfile = false;
  }

  ViewCompleteProfile = function (ViewCompleteProfile) {


    this.languageinputcomp1 = "Child Component1 viewing" + ViewCompleteProfile.id;
    this.ProfileLangchild.showDetailsofLanguage(ViewCompleteProfile.id);

    this.languageinputcomp2 = "Child Component2 viewing" + ViewCompleteProfile.id;
    this.ProfileLangchildTwo.showDetailsofLanguage(ViewCompleteProfile.id);

    this.mydualVariable = (new Date())
  }

  changeroute = function () {

    this.router.navigate(["/"]);
    //this.router.navigate([{ outlets: { appContainer: ['profile'] } }]);

    //this.router.navigate(["", { outlets: { appContainer: null } }], { relativeTo: this.activeroute });
    // .then(() =>
    //   this.router.navigate([{ outlets: { appContainer: ['profile'] } }]));
  }

  changeColorofLanguage = function (languageid) {

    if (languageid == 1) {
      this.progLanguagesList.splice(languageid - 1, 1);
    } else {
      this.ProfileLangchildTwo.splice(languageid - 1, 1);
    }
    // alert("i am Parent");

  }
}
