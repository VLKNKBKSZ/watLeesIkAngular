import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListItemEditComponent } from './book-list-item-edit.component';

describe('BookListItemEditComponent', () => {
  let component: BookListItemEditComponent;
  let fixture: ComponentFixture<BookListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
