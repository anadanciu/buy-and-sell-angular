import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailPageComponent } from './listing-detail-page.component';

describe('ListingDetailPageComponent', () => {
  let component: ListingDetailPageComponent;
  let fixture: ComponentFixture<ListingDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingDetailPageComponent]
    });
    fixture = TestBed.createComponent(ListingDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
