import { HttpService } from 'src/app/core/services/http.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrmService } from './../../../shared/service/trm.service';

import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Trm } from '@shared/model/trm';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let trmService: TrmService;
  const trm: Trm = new Trm(3450.87);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[
        CommonModule,
        HttpClientModule
      ],
      providers: [
        TrmService, HttpService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    trmService = TestBed.inject(TrmService);
    spyOn(trmService, 'consultar').and.returnValue(
      of(trm)
      );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia consultar el trm del día', () => {
    expect(component.trm).toBe(trm); 
  });
});
