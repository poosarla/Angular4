import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

    constructor(private http: Http) { }

    
    postData(postData) {

        return Observable.create((observer: any) => {
        
        let headersObj: any = new Headers();
        headersObj.append("Content-Type", "application/json");

        let searchparam = 2;
      

        this.http.post("http://jsonplaceholder.typicode.com/users?id=" + searchparam, {}, { headers: headersObj }).subscribe(
            data =>  { 
                if (this.hasValue(data.text()) && this.hasValueJSON(data)) {
                observer.next(data.json());
                }else{
                    observer.next("");
                }
                observer.complete();
            }, err => {
                this.handleErrors(err)
            }
        );

    });
    }


    hasValueJSON(input: any) {

        if (input != null && input != undefined && input.json() != null && input.json() != undefined && input.json() != "") {

            return true;
        }
        return false;

    }
    //#########             check HAS VALUE OR NOT- BLOCK START             ##############
    //*******PURPOSE: These methods ARE used to check HAS VALUE TO GIVEN PARAMETER
    //*******CREATED BY: ravi teja.p
    //*******CREATED DATE: 2/6/2017
    //*******MODIFIED DEVELOPER: DATE - NAME - WHAT IS MODIFIED; xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  
    hasValue(input: any) {

        if (input != null && input != undefined && input != "" && input.toString().length > 0) {
            return true;
        }
        return false;
    }

    handleErrors(error: Response) {
        console.log("error" + JSON.stringify(error.json()));
        return Observable.throw(error);
    } 

    converttoarray(data) {
        console.log(data);
        console.log(data.json());
      // this.name = data[0].name;
    }
}