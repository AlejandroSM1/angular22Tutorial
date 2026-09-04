import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCRUD } from './client-crud';

describe('ClientCRUD', () => {
  let component: ClientCRUD;
  let fixture: ComponentFixture<ClientCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
