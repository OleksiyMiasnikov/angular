import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Certificate } from '../certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
 
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Certificate[]>(`${environment.appUrl}/certificates`) 
     
  }
}
