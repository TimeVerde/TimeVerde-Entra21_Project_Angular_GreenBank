import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTransferComponent } from './cliente-transfer.component';

describe('ClienteTransferComponent', () => {
  let component: ClienteTransferComponent;
  let fixture: ComponentFixture<ClienteTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
