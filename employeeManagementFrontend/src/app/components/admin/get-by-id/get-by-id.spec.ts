import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetById } from './get-by-id';

describe('GetById', () => {
  let component: GetById;
  let fixture: ComponentFixture<GetById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetById);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
