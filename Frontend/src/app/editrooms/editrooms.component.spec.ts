import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditroomsComponent } from './editrooms.component';

describe('EditroomsComponent', () => {
  let component: EditroomsComponent;
  let fixture: ComponentFixture<EditroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
