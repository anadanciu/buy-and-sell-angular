import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingPageComponentComponent } from './edit-listing-page.component';

describe('EditListingPageComponentComponent', () => {
  let component: EditListingPageComponentComponent;
  let fixture: ComponentFixture<EditListingPageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditListingPageComponentComponent]
    });
    fixture = TestBed.createComponent(EditListingPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
