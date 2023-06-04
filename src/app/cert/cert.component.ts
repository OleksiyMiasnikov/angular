import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../tag';

@Component({
  selector: 'app-cert',
  templateUrl: './cert.component.html',
  styleUrls: ['./cert.component.scss']
})
export class CertComponent implements OnInit{

  tag: Tag[] = [];
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log("Init")
    this.http.get<Tag[]>(`${environment.appUrl}/tags`)
      .subscribe({next: (data: any) => this.tag=data["content"]})     
  }
}
