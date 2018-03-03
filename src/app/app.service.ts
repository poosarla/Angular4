import { Injectable } from '@angular/core';
import { CommonService } from './AdminLibrary/adminLibrary.service'

@Injectable()
export class AppService {

    constructor(private commonservice: CommonService) { }


    getTestedHttpURLData(data) {
        return this.commonservice.postData(data);
    }
}