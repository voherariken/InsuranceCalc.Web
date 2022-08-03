import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class DataService {
    baseApiUrl = 'https://localhost:44346/api/';
  constructor(private http: HttpClient) { }

  get<T>(url: string, id?: number): Observable<T> {
    return this.http.get<T>(this.getUrl(url, id));
  }

  getList<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl(url));
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this.getUrl(url), data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(this.getUrl(url), data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.getUrl(url));
  }
  private getUrl(url: string, id?: number): string {
    let finalurl = this.baseApiUrl + url;
    if (id != null) {
      finalurl = finalurl + '/' + id;
    }
    return finalurl;
  }
}
