import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApp } from './admin-app';

describe('AdminApp', () => {
  let component: AdminApp;
  let fixture: ComponentFixture<AdminApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
