import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Listing } from "../types";
import { fakeMyListings } from '../fakedata';

@Component({
  selector: 'app-edit-listing-page.component',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss']
})
export class EditListingPageComponent implements OnInit {
  listing!: Listing;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeMyListings.find(listing => listing.id ===id)!;
  
}
 onSubmit(): void {
  alert("Saving changes to the Listing...");
  this.router.navigateByUrl("/my-listings");
 }
}
