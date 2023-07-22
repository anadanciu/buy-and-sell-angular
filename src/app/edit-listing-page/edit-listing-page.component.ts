import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.listingsService
      .getListingById(id)
      .subscribe((listing) => (this.listing = listing));
  }

  onSubmit(editedListing: Listing): void {
    this.listingsService
      .editListing(
        this.listing.id,
        editedListing.name,
        editedListing.description,
        editedListing.price
      )
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
