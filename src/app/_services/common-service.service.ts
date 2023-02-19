import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  setLoading(loading: boolean): void {
    
    if (loading === true) {
      this.loadingSub.next(true);
    }
    if (loading === false) {
      this.loadingSub.next(false);
    }
  }

  getGraphData(url:any){
    return this.http.get(url);
  }
}
