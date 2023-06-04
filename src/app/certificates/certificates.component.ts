import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../shared/certificates.service';
import { Certificate } from '../certificate';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
  
export class CertificatesComponent implements OnInit {
  
  certificates: Certificate[] = []

  constructor(
    private certificatesService: CertificatesService
  ) { }
  
  ngOnInit() {
    this.certificatesService.getAll()
    .subscribe({next: (data: any) => this.certificates=data["content"]})
  }
}
