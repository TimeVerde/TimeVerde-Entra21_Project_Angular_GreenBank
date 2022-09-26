import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSaldoComponent } from './cliente-saldo.component';

describe('ClienteSaldoComponent', () => {
  let component: ClienteSaldoComponent;
  let fixture: ComponentFixture<ClienteSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSaldoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
