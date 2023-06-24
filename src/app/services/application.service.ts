import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Employee } from 'src/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseApiUrl : string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }
  getallapplications(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Application');

  }
  addapplication(addapprequest:Employee):Observable<Employee>
  {
    addapprequest.C_Id ='000000000';
    return this.http.post<Employee>(this.baseApiUrl+'/api/Application',addapprequest);
  }
}
