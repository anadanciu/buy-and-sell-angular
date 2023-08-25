import { Component, OnInit, Inject } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: '<app-listings-page></app-listings-page>',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss'],
  providers: [ListingsService],
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listingsService.getListings().subscribe((res) => {
      console.log(res);
      return (this.listings = res);
    });
  }
}
