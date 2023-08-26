import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.scss'],
})
export class NewListingPageComponent implements OnInit {
  listing!: Listing;
  constructor(
    private router: Router,
    private listingsService: ListingsService
  ) {}
  ngOnInit(): void {}
  onSubmit(newListing: Listing): void {
    this.listingsService
      .createListings(newListing.name, newListing.description, newListing.price)
      .subscribe({
        next: (listing) => {
          this.listing = listing;
          this.router.navigateByUrl('/my-listings');
        },
      });
  }
}
