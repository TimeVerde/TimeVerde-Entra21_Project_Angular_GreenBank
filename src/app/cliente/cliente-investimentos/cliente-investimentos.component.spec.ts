import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInvestimentosComponent } from './cliente-investimentos.component';

describe('ClienteInvestimentosComponent', () => {
  let component: ClienteInvestimentosComponent;
  let fixture: ComponentFixture<ClienteInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteInvestimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
