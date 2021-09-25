import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookroomsComponent } from './bookrooms.component';

describe('BookroomsComponent', () => {
  let component: BookroomsComponent;
  let fixture: ComponentFixture<BookroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookroomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
