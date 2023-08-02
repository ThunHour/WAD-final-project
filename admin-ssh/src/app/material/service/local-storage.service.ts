import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class LocalService {

  key = "cipher_zernia@123";

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }
  public getUsername(key:string){
    let data = localStorage.getItem(key)|| "";
    return {username:this.decrypt(data)};
  }
  public getData(key: string) {
    let data = localStorage.getItem(key)|| "";
    return {token:this.decrypt(data)};
  }
  public getUserRole(key: string){
    let data = localStorage.getItem(key)|| "";
    return {role:this.decrypt(data)};
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
