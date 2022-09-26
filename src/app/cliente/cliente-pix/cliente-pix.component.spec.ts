import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePixComponent } from './cliente-pix.component';

describe('ClientePixComponent', () => {
  let component: ClientePixComponent;
  let fixture: ComponentFixture<ClientePixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientePixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
