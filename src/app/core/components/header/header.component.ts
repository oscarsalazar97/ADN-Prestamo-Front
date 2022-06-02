import { Trm } from './../../../shared/model/trm';
import { Component, OnInit } from '@angular/core';
import { TrmService } from '@shared/service/trm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  trm: Trm;
  constructor(protected trmService:TrmService) { }

  ngOnInit(): void {
    this.trmService.consultar().subscribe((trm: Trm)=> {
      this.trm = trm;
    });
  }

}
