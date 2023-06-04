import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../shared/certificates.service';
import { Observable } from 'rxjs';
import { Certificate } from '../certificate';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  
  certificates$: Observable<Certificate[]> | undefined
  constructor(private certificatesService: CertificatesService) { }
  
  ngOnInit() {
    this.certificates$ = this.certificatesService.getAll()
    console.log('Certificates: ' + this.certificates$.forEach(function (value) { console.log(value) }))
  }

}
