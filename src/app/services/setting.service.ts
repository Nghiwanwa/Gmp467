import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  
  REST_ENDPOINT = "http://siskusserver.com:1342";
  constructor() { }
}
