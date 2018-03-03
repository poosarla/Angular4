import { Component, OnInit, Output, EventEmitter, ViewContainerRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SelfProfileComponent } from './app.selfprofile.component';
@Component({
  selector: 'app-language-detail',
  templateUrl: './app.languagesdetails.html',
  styleUrls: [],
})
export class AppLanguagesDetailComponent implements OnChanges, OnInit {

  //@Output() parentSelfProfileEvent = new EventEmitter<string>();

  @Input() languagedetailinput: string;

  dualChangeVarible: string = "";

  @Output('appceChange') emitter: EventEmitter<string> = new EventEmitter<string>();
  @Input('appce') set setDualSideValue(value) {
    this.dualChangeVarible = value;
  }

  changeLog: string[] = [];

  // languagedetailinput: string = "";
  constructor(private viewContainerRef: ViewContainerRef) { }

  languageID: any = -1;

  ngOnInit(): any {

  }

  ngOnChanges(changes: SimpleChanges) {

    debugger;

    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));

  }

  getTitle() {

    //  if (this.languageinputcomp1) {
    //this.languagedetailinput = this.languagedetailinput;
    // } else {
    //   this.childComponentTitle = this.languageinputcomp2;
    // }

    return this.languagedetailinput;
  }


  showDetailsofLanguage = function (languageid) {

    this.languageID = languageid;
  }

  getParentComponent(): SelfProfileComponent {
    return this.viewContainerRef['_data'].componentView.component.viewContainerRef['_view'].component
  }

  changeLanguageColor = function (languageid) {

    this.getParentComponent().changeColorofLanguage(languageid);

    this.emitter.emit((new Date()));

  }
}
