import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  async get(url: string) {
    try {
      return this.http.get(url).toPromise();
    }
    catch (e) {
      return null;
    }
  }
  async post(url: string, data?: any) {
    try {

      const resp = await this.http.post(url, data, {
        headers: {
        },
        // params: data
      }).toPromise();
      return resp;
    } catch (e) {
      return null;
    }
  }
  async delete(i: any) {
    try {
      return this.http.delete('http://localhost:80/MarksApp/delete.php' + { i }).toPromise();
    }
    catch{
      console.log("error");
    }
  }
  async put(url: string, data?: any) 
  {
    try 
    {
      const resp = await this.http.put(url, data, { headers: {},
       }).toPromise();
      return resp;
    } catch (e) {
      return null;
    }
  }
}
