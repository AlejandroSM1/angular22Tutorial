import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIex } from './get-apiex';

describe('GetAPIex', () => {
  let component: GetAPIex;
  let fixture: ComponentFixture<GetAPIex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAPIex],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAPIex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
