import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private contentTypeHeader: object = {
    'json':'application/json',
    'form-multipart':'multipart/form-data',
    'form-url-encoded':'application/x-www-form-urlencoded'
  };

  private headerTypes: object = {
    'auth':{
      'type':'X-AUTH-TOKEN',
      'value':environment.accessToken
    },
    'content':{
      'type':'Content-Type',
      'value':this.contentTypeHeader
    }
  }
  public setHeader(headerToSet: any): any{
    let header = new HttpHeaders();
    if(headerToSet.type === 'auth'){
     return header.append(this.headerTypes[headerToSet.type].type,this.headerTypes[headerToSet.type].value);
    }else{
      return header.append(this.headerTypes[headerToSet.type].type,this.headerTypes[headerToSet.type].value[headerToSet.name]);
    }
  }
  constructor() { }
}
